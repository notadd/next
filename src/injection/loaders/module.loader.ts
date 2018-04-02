import { Injection, Module as ModuleInterface, ModuleCache } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { InjectionType } from "@notadd/core/constants";
import { SettingService } from "@notadd/setting/services";

export class ModuleLoader extends InjectionLoader {
    protected cacheForModules: Array<ModuleInterface> = [];

    protected filePathForEnabledCache = `${process.cwd()}/storages/modules/enabled.json`;

    constructor() {
        super();
        this.loadModulesFromCaches();
    }

    public refreshModules() {
        this.cacheForModules.splice(0, this.cacheForModules.length);
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

        const caches = this.loadCachesFromJsonFile<ModuleCache>(this.filePathForCache);
        console.log(caches);

        return this;
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
                    version: Reflect.getMetadata("version", injection.target),
            };
            });
    }
}

export const Module = new ModuleLoader();
