"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class PlatformTools {
    static load(name) {
        try {
            switch (name) {
                default:
                    return require(name);
            }
        }
        catch (err) {
            if (!path.isAbsolute(name) && name.substr(0, 2) !== "./" && name.substr(0, 3) !== "../") {
                return require(path.resolve(process.cwd() + "/node_modules/" + name));
            }
            throw err;
        }
    }
    static pathExtname(pathString) {
        return path.extname(pathString);
    }
    static pathNormalize(pathString) {
        return path.normalize(pathString);
    }
    static pathResolve(pathString) {
        return path.resolve(pathString);
    }
}
exports.PlatformTools = PlatformTools;
