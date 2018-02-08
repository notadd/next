import { importClassesFromDirectories } from "./import-classes-from-directories";

export function loadExtensionsFromFiles(): Array<Function> {
    const injections = importClassesFromDirectories<Function>([
        "**/*.injection.js",
    ]);

    return [];
}
