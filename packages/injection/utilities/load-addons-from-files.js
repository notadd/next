"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
function loadAddonsFromFiles() {
    const file = path_1.join(process.cwd(), "storages", "addons", "enabled.yaml");
    if (fs_1.existsSync(file)) {
        const enabled = js_yaml_1.safeLoad(fs_1.readFileSync(file));
    }
    else {
        return [];
    }
}
exports.loadAddonsFromFiles = loadAddonsFromFiles;
