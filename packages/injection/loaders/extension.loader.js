"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExtensionLoader {
    constructor() {
        this.filePathForEnabledCache = `${process.cwd()}/storages/extensions/enabled.json`;
    }
    load() {
    }
}
exports.ExtensionLoader = ExtensionLoader;
exports.Extension = new ExtensionLoader();
