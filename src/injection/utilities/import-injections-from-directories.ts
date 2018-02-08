import { Injection } from "../types/injection.type";
import { PlatformTools } from "./platform-tools";

export function importInjectionsFromDirectories(directories: string[], formats = [ ".js", ".ts" ]): Array<Injection> {
    return directories
        .reduce((allDirs, dir) => {
            return allDirs.concat(PlatformTools.load("glob").sync(PlatformTools.pathNormalize(dir)));
        }, [] as string[])
        .filter(file => {
            const dtsExtension = file.substring(file.length - 5, file.length);

            return formats.indexOf(PlatformTools.pathExtname(file)) !== -1 && dtsExtension !== ".d.ts";
        })
        .map(file => {
            let target: Function = () => {};
            const imported = PlatformTools.load(PlatformTools.pathResolve(file)) as Function;
            if (typeof imported === "object") {
                Object.keys(imported).forEach(key => {
                    if (typeof imported[key] === "function") {
                        target = imported[key];
                    }
                });
            }

            return {
                location: file,
                target: target,
            };
        });
}
