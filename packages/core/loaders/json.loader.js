"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonLoader {
    load(path) {
        return require(path);
    }
}
exports.JsonLoader = JsonLoader;
exports.Json = new JsonLoader();
