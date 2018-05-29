"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const constants_1 = require("@notadd/core/constants");
const injection_loader_1 = require("./injection.loader");
class ExtensionLoader extends injection_loader_1.InjectionLoader {
    constructor() {
        super();
        this.cacheForExtensions = [];
        this.filePathForCache = `${process.cwd()}/storages/caches/extension.json`;
        this.loadExtensionsFromCache();
    }
    get extensions() {
        if (!this.cacheForExtensions.length) {
            this.loadExtensionsFromCache();
        }
        return this.cacheForExtensions;
    }
    loadCachesFromJson() {
        return this.loadCachesFromJsonFile(this.filePathForCache);
    }
    refresh() {
        this.cacheForExtensions.splice(0, this.cacheForExtensions.length);
        return this;
    }
    async syncWithSetting(setting) {
        if (!this.cacheForExtensions.length) {
            this.loadExtensionsFromCache();
        }
        for (let i = 0; i < this.cacheForExtensions.length; i++) {
            const extension = this.cacheForExtensions[i];
            const identification = extension.identification;
            extension.enabled = await setting.get(`extension.${identification}.enabled`, false);
            extension.installed = await setting.get(`extension.${identification}.installed`, false);
            this.cacheForExtensions.splice(i, 1, extension);
        }
        this.syncCachesToFile();
        return this;
    }
    loadExtensionsFromCache() {
        this.cacheForExtensions.splice(0, this.cacheForExtensions.length);
        this.cacheForExtensions = this
            .injections
            .filter((injection) => {
            return constants_1.InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
        }).map((injection) => {
            const identification = Reflect.getMetadata("identification", injection.target);
            return {
                authors: Reflect.getMetadata("authors", injection.target),
                description: Reflect.getMetadata("description", injection.target),
                enabled: false,
                identification,
                installed: false,
                location: injection.location,
                name: Reflect.getMetadata("name", injection.target),
                shell: Reflect.getMetadata("shell", injection.target),
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
        const locations = this.extensions.filter((extension) => {
            return extension.enabled === true;
        }).map((extension) => {
            return extension.location;
        });
        if (this.hasDiffBetweenArrays(exists, locations)) {
            caches.enabled = locations;
            this.writeCachesToFile(this.filePathForCache, caches);
        }
    }
}
exports.ExtensionLoader = ExtensionLoader;
exports.Extension = new ExtensionLoader();

//# sourceMappingURL=extension.loader.js.map
