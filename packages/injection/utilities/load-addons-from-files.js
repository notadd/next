"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const import_classes_from_directories_1 = require("./import-classes-from-directories");
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
function loadAddonsFromFiles() {
    const file = path_1.join(process.cwd(), "storages", "addons", "enabled.yaml");
    if (fs_1.existsSync(file)) {
        let enabled = js_yaml_1.safeLoad(fs_1.readFileSync(file).toString());
        if (!enabled) {
            enabled = [];
        }
        return import_classes_from_directories_1.importClassesFromDirectories(enabled);
    }
    else {
        return [];
    }
}
exports.loadAddonsFromFiles = loadAddonsFromFiles;
