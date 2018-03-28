"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = require("../utilities");
class InjectionLoader {
    constructor() {
        this.pattern = [
            "**/*.injection.js",
        ];
        this.injections = utilities_1.importInjectionsFromDirectories(this.pattern);
    }
    load() {
        return this.injections;
    }
    refresh() {
        this.injections = utilities_1.importInjectionsFromDirectories(this.pattern);
    }
}
exports.InjectionLoader = InjectionLoader;
exports.Injection = new InjectionLoader();
