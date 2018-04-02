"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class InjectionLoader {
    constructor() {
        this.cacheForInjections = [];
        this.patterns = [
            "**/*.injection.js",
        ];
        this.loadInjectionsFromCache();
    }
    get injections() {
        if (!this.cacheForInjections.length) {
            this.loadInjectionsFromCache();
        }
        return this.cacheForInjections;
    }
    refreshInjections() {
        this.cacheForInjections.splice(0, this.cacheForInjections.length);
    }
    loadInjectionsFromCache() {
        this.cacheForInjections = utilities_1.importInjectionsFromDirectories(this.patterns);
    }
}
exports.InjectionLoader = InjectionLoader;
exports.Injection = new InjectionLoader();
