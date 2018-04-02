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
class AddonLoader {
    constructor() {
        this.caches = [];
        this.filePathForCache = `${process.cwd()}/storages/caches/addon.json`;
        this.loadCaches();
    }
    get addons() {
        if (!this.caches.length) {
            this.loadCaches();
        }
        return this.caches;
    }
    loadEnabledAddons() {
        return this.addons;
    }
    refresh() {
        this.caches.splice(0, this.caches.length);
    }
    syncWithSetting(setting) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.caches.length) {
                this.loadCaches();
            }
            for (let i = 0; i < this.caches.length; i++) {
                const addon = this.caches[i];
                const identification = addon.identification;
                addon.enabled = yield setting.get(`addon.${identification}.enabled`, false);
                addon.installed = yield setting.get(`addon.${identification}.installed`, false);
                this.caches.splice(i, 1, addon);
            }
            return this;
        });
    }
    loadCaches() {
        this.caches.splice(0, this.caches.length);
        this.caches = injection_loader_1.Injection
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
                version: Reflect.getMetadata("version", injection.target),
            };
        });
    }
}
exports.AddonLoader = AddonLoader;
exports.Addon = new AddonLoader();
