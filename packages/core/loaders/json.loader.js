"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadJsonFile = require("load-json-file");
const common_1 = require("@nestjs/common");
class JsonLoader {
    constructor() {
        this.logger = new common_1.Logger("JsonLoader");
    }
    load(path) {
        return loadJsonFile.sync(path);
    }
}
exports.JsonLoader = JsonLoader;
exports.Json = new JsonLoader();

//# sourceMappingURL=json.loader.js.map
