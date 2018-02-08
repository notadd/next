import { existsSync, readFileSync } from "fs";
import { importClassesFromDirectories } from "./import-classes-from-directories";
import { join } from "path";
import { safeLoad } from "js-yaml";

export function loadAddonsFromFiles(): Array<Function> {
    const file = join(process.cwd(), "storages", "addons", "enabled.yaml");
    if (existsSync(file)) {
        const enabled: Array<string> = safeLoad(readFileSync(file).toString());

        return importClassesFromDirectories(enabled);
    } else {
        return [];
    }
}
