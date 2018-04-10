import { AddonCache, Addon as AddonInterface, Injection } from "../interfaces";
import { existsSync } from "fs";
import { InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class AddonLoader extends InjectionLoader {
    protected cacheForAddons: Array<AddonInterface> = [];

    protected filePathForCache = `${process.cwd()}/storages/caches/addon.json`;

    public get addons(): Array<AddonInterface> {
        if (!this.cacheForAddons.length) {
            this.loadAddonsFromCache();
        }

        return this.cacheForAddons;
    }

    constructor() {
        super();
        this.loadAddonsFromCache();
    }

    public loadCachesFromJson(): AddonCache {
        return this.loadCachesFromJsonFile<AddonCache>(this.filePathForCache);
    }

    public refresh() {
        this.cacheForAddons.splice(0, this.cacheForAddons.length);

        return this;
    }

    public async syncWithSetting(setting: SettingService) {
        if (!this.cacheForAddons.length) {
            this.loadAddonsFromCache();
        }
        for (let i = 0; i < this.cacheForAddons.length; i ++) {
            const addon = this.cacheForAddons[i];
            const identification = addon.identification;
            addon.enabled = await setting.get(`addon.${identification}.enabled`, false);
            addon.installed = await setting.get(`addon.${identification}.installed`, false);
            this.cacheForAddons.splice(i, 1, addon);
        }

        this.syncCachesToFile();

        return this;
    }

    protected loadAddonsFromCache() {
        this.cacheForAddons.splice(0, this.cacheForAddons.length);
        this.cacheForAddons = this
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
                    target: injection.target,
                    version: Reflect.getMetadata("version", injection.target),
                };
            });
    }

    protected syncCachesToFile() {
        let caches: AddonCache = {
            enabled: [],
        };
        if (existsSync(this.filePathForCache)) {
            caches = this.loadCachesFromJson();
        }
        const exists: Array<string> = caches.enabled ? caches.enabled : [];
        const locations = this.addons.filter((addon: AddonInterface) => {
            return addon.enabled === true;
        }).map((addon: AddonInterface) => {
            return addon.location;
        });
        if (this.hasDiffBetweenArrays(exists, locations)) {
            caches.enabled = locations;
            this.writeCachesToFile(this.filePathForCache, caches);
        }
    }
}

export const addon = new AddonLoader();
