import { PlatformTools } from "./platform-tools";

/**
 * @param { Array<string> } directories
 * @param { Array<string> } formats
 *
 * @returns { Array<T> }
 */
export function importClassesFromDirectories<T>(directories: Array<string>, formats = [ ".js", ".ts"]): Array<T> {
    /**
     * @param exported
     * @param { Array<T> } allLoaded
     *
     * @returns { Array<T> }
     */
    function loadFileClasses<T>(exported: any, allLoaded: Array<T>) {
        if (typeof exported === "function") {
            allLoaded.push(exported);
        } else if (Array.isArray(exported)) {
            exported.forEach((i: any) => loadFileClasses<T>(i, allLoaded));
        } else if (typeof exported === "object") {
            Object.keys(exported).forEach(key => loadFileClasses<T>(exported[key], allLoaded));
        }

        return allLoaded;
    }

    const allFiles = directories.reduce((allDirs, dir) => {
        return allDirs.concat(PlatformTools.load("glob").sync(PlatformTools.pathNormalize(dir)));
    }, [] as Array<string>);

    const dirs = allFiles
        .filter(file => {
            const dtsExtension = file.substring(file.length - 5, file.length);

            return formats.indexOf(PlatformTools.pathExtname(file)) !== -1 && dtsExtension !== ".d.ts";
        })
        .map(file => PlatformTools.load(PlatformTools.pathResolve(file)) as T);

    return loadFileClasses<T>(dirs, []);
}
