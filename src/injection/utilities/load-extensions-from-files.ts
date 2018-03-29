import { existsSync, readFileSync } from "fs";
import { importClassesFromDirectories } from "./import-classes-from-directories";
import { join } from "path";
import { safeLoad } from "js-yaml";

export function loadExtensionsFromFiles(): Array<Function> {
    const file = join(process.cwd(), "storages", "extensions", "enabled.yaml");
    if (existsSync(file)) {
        let enabled: Array<string> = safeLoad(readFileSync(file).toString()) as Array<string>;
        if (!enabled) {
            enabled = [];
        }

        return importClassesFromDirectories(enabled);
    } else {
        return [];
    }
}
