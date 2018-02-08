import { importClassesFromDirectories } from "./import-classes-from-directories";

export function loadModulesFromFiles(): Array<Function> {
    const injections = importClassesFromDirectories<Function>([
        "**/*.injection.js",
    ]);

    return [];
}
