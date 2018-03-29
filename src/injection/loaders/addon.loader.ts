import { Addon as AddonInterface, Injection } from "../interfaces";
import { Injection as InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class AddonLoader {
    protected caches: Array<AddonInterface> = [];

    protected filePathForEnabledCache = `${process.cwd()}/storages/addons/enabled.json`;

    protected initialize() {
        this.addons.splice(0, this.addons.length);
    }

    public get addons(): Array<AddonInterface> {
        if (!this.caches.length) {
            this.loadCaches();
        }

        return this.caches;
    }

    public loadEnabledAddons() {
        return this.addons;
    }

    public refresh() {
        this.caches.splice(0, this.caches.length);
    }

    public async syncWithSetting(setting: SettingService) {
        if (!this.caches.length) {
            this.loadCaches();
        }
        for(let i = 0; i < this.caches.length; i ++) {
            const addon = this.caches[i];
            const identification = addon.identification;
            addon.enabled = await setting.get(`addon.${identification}.enabled`, false);
            addon.installed = await setting.get(`addon.${identification}.installed`, false);
            this.caches.splice(i, 1, addon);
        }

        return this;
    }

    protected loadCaches() {
        this.caches.splice(0, this.caches.length);
        this.caches = InjectionLoader
            .injections
            .filter((injection: Injection) => {
                return InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .map((injection: Injection) => {
                return {
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: false,
                    identification: Reflect.getMetadata("identification", injection.target),
                    installed: false,
                    location: injection.location,
                    name: Reflect.getMetadata("name", injection.target),
                    version: Reflect.getMetadata("version", injection.target),
                };
            });

        return this;
    }
}

export const Addon = new AddonLoader();
