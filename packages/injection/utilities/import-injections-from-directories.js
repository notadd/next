"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_tools_1 = require("./platform-tools");
function importInjectionsFromDirectories(directories, formats = [".js", ".ts"]) {
    return directories
        .reduce((allDirs, dir) => {
        return allDirs.concat(platform_tools_1.PlatformTools.load("glob").sync(platform_tools_1.PlatformTools.pathNormalize(dir)));
    }, [])
        .filter(file => {
        const dtsExtension = file.substring(file.length - 5, file.length);
        return formats.indexOf(platform_tools_1.PlatformTools.pathExtname(file)) !== -1 && dtsExtension !== ".d.ts";
    })
        .map(file => {
        let target = () => {
            return;
        };
        const imported = platform_tools_1.PlatformTools.load(platform_tools_1.PlatformTools.pathResolve(file));
        if (typeof imported === "object") {
            Object.keys(imported).forEach(key => {
                if (typeof imported[key] === "function") {
                    target = imported[key];
                }
            });
        }
        return {
            location: file,
            target,
        };
    });
}
exports.importInjectionsFromDirectories = importInjectionsFromDirectories;
