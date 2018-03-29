"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class InjectionLoader {
    constructor() {
        this.caches = [];
        this.patterns = [
            "**/*.injection.js",
        ];
    }
    get injections() {
        if (this.caches.length < 1) {
            this.caches = utilities_1.importInjectionsFromDirectories(this.patterns);
        }
        return this.caches;
    }
    refresh() {
        this.caches.splice(0, this.caches.length);
    }
}
exports.InjectionLoader = InjectionLoader;
exports.Injection = new InjectionLoader();
