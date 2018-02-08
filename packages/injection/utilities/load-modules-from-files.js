"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const import_classes_from_directories_1 = require("./import-classes-from-directories");
function loadModulesFromFiles() {
    const injections = import_classes_from_directories_1.importClassesFromDirectories([
        "**/*.injection.js",
    ]);
    return [];
}
exports.loadModulesFromFiles = loadModulesFromFiles;
