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
class ModuleLoader {
    constructor() {
        this.caches = [];
        this.filePathForEnabledCache = `${process.cwd()}/storages/modules/enabled.json`;
        this.loadCaches();
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
                const module = this.caches[i];
                const identification = module.identification;
                module.enabled = yield setting.get(`module.${identification}.enabled`, false);
                module.installed = yield setting.get(`module.${identification}.installed`, false);
                this.caches.splice(i, 1, module);
            }
            return this;
        });
    }
    loadCaches() {
        this.caches.splice(0, this.caches.length);
        this.caches = injection_loader_1.Injection
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
                identification: identification,
                installed: false,
                location: injection.location,
                name: Reflect.getMetadata("name", injection.target),
                version: Reflect.getMetadata("version", injection.target),
            };
        });
    }
}
exports.ModuleLoader = ModuleLoader;
exports.Module = new ModuleLoader();
