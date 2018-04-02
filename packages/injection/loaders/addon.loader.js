"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const injection_loader_1 = require("./injection.loader");
const constants_1 = require("@notadd/core/constants");
class AddonLoader extends injection_loader_1.InjectionLoader {
    constructor() {
        super();
        this.cacheForAddons = [];
        this.filePathForCache = `${process.cwd()}/storages/caches/addon.json`;
        this.loadAddonsFromCache();
    }
    get addons() {
        if (!this.cacheForAddons.length) {
            this.loadAddonsFromCache();
        }
        return this.cacheForAddons;
    }
    loadCachesFromJson() {
        return this.loadCachesFromJsonFile(this.filePathForCache);
    }
    refresh() {
        this.cacheForAddons.splice(0, this.cacheForAddons.length);
        return this;
    }
    syncWithSetting(setting) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.cacheForAddons.length) {
                this.loadAddonsFromCache();
            }
            for (let i = 0; i < this.cacheForAddons.length; i++) {
                const addon = this.cacheForAddons[i];
                const identification = addon.identification;
                addon.enabled = yield setting.get(`addon.${identification}.enabled`, false);
                addon.installed = yield setting.get(`addon.${identification}.installed`, false);
                this.cacheForAddons.splice(i, 1, addon);
            }
            this.syncCachesToFile();
            return this;
        });
    }
    loadAddonsFromCache() {
        this.cacheForAddons.splice(0, this.cacheForAddons.length);
        this.cacheForAddons = this
            .injections
            .filter((injection) => {
            return constants_1.InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
        })
            .map((injection) => {
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
    syncCachesToFile() {
        const caches = this.loadCachesFromJson();
        const exists = caches.enabled ? caches.enabled : [];
        const locations = this.addons.filter((addon) => {
            return addon.enabled === true;
        }).map((addon) => {
            return addon.location;
        });
        if (this.hasDiffBetweenArrays(exists, locations)) {
            caches.enabled = locations;
            this.writeCachesToFile(this.filePathForCache, caches);
        }
    }
}
exports.AddonLoader = AddonLoader;
exports.Addon = new AddonLoader();
