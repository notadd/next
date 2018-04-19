"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_tools_1 = require("./platform-tools");
function importClassesFromDirectories(directories, formats = [".js", ".ts"]) {
    function loadFileClasses(exported, allLoaded) {
        if (typeof exported === "function") {
            allLoaded.push(exported);
        }
        else if (Array.isArray(exported)) {
            exported.forEach((i) => loadFileClasses(i, allLoaded));
        }
        else if (typeof exported === "object") {
            Object.keys(exported).forEach(key => loadFileClasses(exported[key], allLoaded));
        }
        return allLoaded;
    }
    const allFiles = directories.reduce((allDirs, dir) => {
        return allDirs.concat(platform_tools_1.PlatformTools.load("glob").sync(platform_tools_1.PlatformTools.pathNormalize(dir)));
    }, []);
    const dirs = allFiles
        .filter(file => {
        const dtsExtension = file.substring(file.length - 5, file.length);
        return formats.indexOf(platform_tools_1.PlatformTools.pathExtname(file)) !== -1 && dtsExtension !== ".d.ts";
    })
        .map(file => platform_tools_1.PlatformTools.load(platform_tools_1.PlatformTools.pathResolve(file)));
    return loadFileClasses(dirs, []);
}
exports.importClassesFromDirectories = importClassesFromDirectories;

//# sourceMappingURL=import-classes-from-directories.js.map
