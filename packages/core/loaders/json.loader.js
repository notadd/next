"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadJsonFile = require("load-json-file");
const path_1 = require("path");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
class JsonLoader {
    constructor() {
        this.logger = new common_1.Logger("JsonLoader");
    }
    load(path) {
        if (!fs_1.existsSync(path_1.dirname(path)) && !fs_1.existsSync(path)) {
            this.logger.error(`File \`${path}\` or its directory \`${path_1.dirname(path)}\` do not exists`);
        }
        else {
            if (fs_1.existsSync(path)) {
                return loadJsonFile.sync(path);
            }
            else {
                return {};
            }
        }
    }
}
exports.JsonLoader = JsonLoader;
exports.Json = new JsonLoader();
