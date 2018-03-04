"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
function getPackagePathByModule(module) {
    function getPath(base) {
        if (base.length === 0) {
            return "";
        }
        else {
            if (fs_1.existsSync(path_1.join(base, "package.json"))) {
                return base;
            }
            else {
                return getPath(path_1.dirname(base));
            }
        }
    }
    return getPath(path_1.dirname(module.location));
}
exports.getPackagePathByModule = getPackagePathByModule;
