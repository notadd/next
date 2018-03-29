"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadJsonFile = require("load-json-file");
class JsonLoader {
    load(path) {
        return loadJsonFile.sync(path);
    }
}
exports.JsonLoader = JsonLoader;
exports.Json = new JsonLoader();
