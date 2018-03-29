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
class ExtensionLoader {
    constructor() {
        this.caches = [];
        this.filePathForEnabledCache = `${process.cwd()}/storages/extensions/enabled.json`;
        this.loadCaches();
    }
    get extensions() {
        if (!this.caches.length) {
            this.loadCaches();
        }
        return this.caches;
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
                const extension = this.caches[i];
                const identification = extension.identification;
                extension.enabled = yield setting.get(`extension.${identification}.enabled`, false);
                extension.installed = yield setting.get(`extension.${identification}.installed`, false);
                this.caches.splice(i, 1, extension);
            }
            return this;
        });
    }
    loadCaches() {
        this.caches = injection_loader_1.Injection
            .injections
            .filter((injection) => {
            return constants_1.InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
        }).map((injection) => {
            const identification = Reflect.getMetadata("identification", injection.target);
            return {
                authors: Reflect.getMetadata("authors", injection.target),
                description: Reflect.getMetadata("description", injection.target),
                enabled: false,
                identification: identification,
                installed: false,
                location: injection.location,
                name: Reflect.getMetadata("name", injection.target),
                shell: Reflect.getMetadata("shell", injection.target),
                version: Reflect.getMetadata("version", injection.target),
            };
        });
    }
}
exports.ExtensionLoader = ExtensionLoader;
exports.Extension = new ExtensionLoader();
