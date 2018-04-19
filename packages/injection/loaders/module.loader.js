"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const injection_loader_1 = require("./injection.loader");
const constants_1 = require("@notadd/core/constants");
class ModuleLoader extends injection_loader_1.InjectionLoader {
    constructor() {
        super();
        this.cacheForModules = [];
        this.filePathForCache = `${process.cwd()}/storages/caches/module.json`;
        this.loadModulesFromCaches();
    }
    get modules() {
        if (!this.cacheForModules.length) {
            this.loadModulesFromCaches();
        }
        return this.cacheForModules;
    }
    refresh() {
        this.cacheForModules.splice(0, this.cacheForModules.length);
        return this;
    }
    async syncWithSetting(setting) {
        if (!this.cacheForModules.length) {
            this.loadModulesFromCaches();
        }
        for (let i = 0; i < this.cacheForModules.length; i++) {
            const module = this.cacheForModules[i];
            const identification = module.identification;
            module.enabled = await setting.get(`module.${identification}.enabled`, false);
            module.installed = await setting.get(`module.${identification}.installed`, false);
            this.cacheForModules.splice(i, 1, module);
        }
        this.syncCachesToFile();
        return this;
    }
    loadCachesFromJson() {
        return this.loadCachesFromJsonFile(this.filePathForCache);
    }
    loadModulesFromCaches() {
        this.cacheForModules.splice(0, this.cacheForModules.length);
        this.cacheForModules = this
            .injections
            .filter((injection) => {
            return constants_1.InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
        })
            .map((injection) => {
            const identification = Reflect.getMetadata("identification", injection.target);
            return {
                authors: Reflect.getMetadata("authors", injection.target),
                description: Reflect.getMetadata("description", injection.target),
                enabled: false,
                identification,
                installed: false,
                location: injection.location,
                name: Reflect.getMetadata("name", injection.target),
                target: injection.target,
                version: Reflect.getMetadata("version", injection.target),
            };
        });
    }
    syncCachesToFile() {
        let caches = {
            enabled: [],
        };
        if (fs_1.existsSync(this.filePathForCache)) {
            caches = this.loadCachesFromJson();
        }
        const exists = caches.enabled ? caches.enabled : [];
        const locations = this.modules.filter((module) => {
            return module.enabled === true;
        }).map((module) => {
            return module.location;
        });
        if (this.hasDiffBetweenArrays(exists, locations)) {
            caches.enabled = locations;
            this.writeCachesToFile(this.filePathForCache, caches);
        }
    }
}
exports.ModuleLoader = ModuleLoader;
exports.module = new ModuleLoader();

//# sourceMappingURL=module.loader.js.map
