import { PlatformTools } from "./platform.tools";

/**
 * @param { string[] } directories
 * @param { (string | string)[] } formats
 * @returns { Function[] }
 */
export function importClassesFromDirectories(directories: string[], formats = [ ".js", ".ts"]): Function[] {
    /**
     * @param exported
     * @param { Function[] } allLoaded
     *
     * @returns { Function[] }
     */
    function loadFileClasses(exported: any, allLoaded: Function[]) {
        if (typeof exported === "function") {
            allLoaded.push(exported);

        } else if (Array.isArray(exported)) {
            exported.forEach((i: any) => loadFileClasses(i, allLoaded));

        } else if (typeof exported === "object") {
            Object.keys(exported).forEach(key => loadFileClasses(exported[key], allLoaded));
        }

        return allLoaded;
    }

    const allFiles = directories.reduce((allDirs, dir) => {
        return allDirs.concat(PlatformTools.load("glob").sync(PlatformTools.pathNormalize(dir)));
    }, [] as string[]);

    const dirs = allFiles
        .filter(file => {
            const dtsExtension = file.substring(file.length - 5, file.length);
            return formats.indexOf(PlatformTools.pathExtname(file)) !== -1 && dtsExtension !== ".d.ts";
        })
        .map(file => PlatformTools.load(PlatformTools.pathResolve(file)));

    return loadFileClasses(dirs, []);
}
