"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const writeJsonToFile = require("write-json-file");
const path_1 = require("path");
const fs_1 = require("fs");
const utilities_1 = require("../utilities");
const common_1 = require("@nestjs/common");
const loaders_1 = require("@notadd/core/loaders");
class InjectionLoader {
    constructor() {
        this.cacheForInjections = [];
        this.filePathForCache = "";
        this.logger = new common_1.Logger("Injection");
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
    hasDiffBetweenArrays(one, two) {
        return one.filter(data => {
            return two.indexOf(data) === -1;
        }).length > 0 || two.filter(data => {
            return one.indexOf(data) === -1;
        }).length > 0;
    }
    loadCachesFromJsonFile(path) {
        this.logger.log("Load caches from file: " + path);
        return loaders_1.Json.load(path);
    }
    loadInjectionsFromCache() {
        this.cacheForInjections = utilities_1.importInjectionsFromDirectories(this.patterns);
    }
    writeCachesToFile(path, data) {
        if (fs_1.existsSync(path_1.dirname(path))) {
            writeJsonToFile.sync(path, data);
            this.logger.log("Write caches to file: " + path);
        }
        else {
            this.logger.warn(`Path: \`${path}\` do not exists`);
        }
    }
}
exports.InjectionLoader = InjectionLoader;
exports.injection = new InjectionLoader();
