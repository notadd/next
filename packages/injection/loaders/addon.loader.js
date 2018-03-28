"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddonLoader {
    constructor() {
        this.filePathForEnabledCache = `${process.cwd()}/storages/addons/enabled.json`;
    }
    load() {
    }
}
exports.AddonLoader = AddonLoader;
exports.Addon = new AddonLoader();
