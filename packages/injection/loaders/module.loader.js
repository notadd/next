"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModuleLoader {
    constructor() {
        this.filePathForEnabledCache = `${process.cwd()}/storages/modules/enabled.json`;
    }
    load() {
        return this.modules;
    }
}
exports.ModuleLoader = ModuleLoader;
exports.Module = new ModuleLoader();
