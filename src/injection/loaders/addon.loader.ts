import { Addon as AddonInterface, Injection } from "../interfaces";
import { Injection as InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class AddonLoader {
    protected caches: Array<AddonInterface> = [];

    protected filePathForCache = `${process.cwd()}/storages/caches/addon.json`;

    public get addons(): Array<AddonInterface> {
        if (!this.caches.length) {
            this.loadCaches();
        }

        return this.caches;
    }

    constructor() {
        this.loadCaches();
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
    }
}

export const Addon = new AddonLoader();
