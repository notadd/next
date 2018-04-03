import { existsSync } from "fs";
import { Injection, Module as ModuleInterface, ModuleCache } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class ModuleLoader extends InjectionLoader {
    protected cacheForModules: Array<ModuleInterface> = [];

    protected filePathForCache = `${process.cwd()}/storages/caches/module.json`;

    public get modules(): Array<ModuleInterface> {
        if (!this.cacheForModules.length) {
            this.loadModulesFromCaches();
        }

        return this.cacheForModules;
    }

    constructor() {
        super();
        this.loadModulesFromCaches();
    }

    public refresh() {
        this.cacheForModules.splice(0, this.cacheForModules.length);

        return this;
    }

    public async syncWithSetting(setting: SettingService) {
        if (!this.cacheForModules.length) {
            this.loadModulesFromCaches();
        }
        for(let i = 0; i < this.cacheForModules.length; i ++) {
            const module = this.cacheForModules[i];
            const identification = module.identification;
            module.enabled = await setting.get(`module.${identification}.enabled`, false);
            module.installed = await setting.get(`module.${identification}.installed`, false);
            this.cacheForModules.splice(i, 1, module);
        }

        this.syncCachesToFile();

        return this;
    }

    public loadCachesFromJson(): ModuleCache {
        return this.loadCachesFromJsonFile<ModuleCache>(this.filePathForCache);
    }

    protected loadModulesFromCaches() {
        this.cacheForModules.splice(0, this.cacheForModules.length);
        this.cacheForModules = this
            .injections
            .filter((injection: Injection) => {
                return InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
            })
            .map((injection: Injection) => {
                const identification = Reflect.getMetadata("identification", injection.target);

                return {
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: false,
                    identification: identification,
                    installed: false,
                    location: injection.location,
                    name: Reflect.getMetadata("name", injection.target),
                    target: injection.target,
                    version: Reflect.getMetadata("version", injection.target),
                };
            });
    }

    protected syncCachesToFile() {
        let caches: ModuleCache = {
            enabled: [],
        };
        if (existsSync(this.filePathForCache)) {
            caches = this.loadCachesFromJson();
        }
        const exists: Array<string> = caches.enabled ? caches.enabled : [];
        const locations = this.modules.filter((module: ModuleInterface) => {
            return module.enabled === true;
        }).map((module: ModuleInterface) => {
            return module.location;
        });
        if (this.hasDiffBetweenArrays(exists, locations)) {
            caches.enabled = locations;

            this.writeCachesToFile(this.filePathForCache, caches);
        }
    }
}

export const Module = new ModuleLoader();
