import { importClassesFromDirectories } from "./import-classes-from-directories";

export function loadAddonsFromFiles(): Array<Function> {
    const injections = importClassesFromDirectories<Function>([
        "**/*.injection.js",
    ]);

    return [];
}
