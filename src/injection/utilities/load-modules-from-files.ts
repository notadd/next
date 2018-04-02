import { existsSync } from "fs";
import { importClassesFromDirectories } from "./import-classes-from-directories";
import { join } from "path";
import { Json } from "@notadd/core/loaders";
import { ModuleCache } from "../interfaces";

export function loadModulesFromFiles(): Array<Function> {
    const file = join(process.cwd(), "storages", "modules", "enabled.yaml");
    if (existsSync(file)) {
        let caches = Json.load<ModuleCache>(file);

        return importClassesFromDirectories(caches.enabled ? caches.enabled : []);
    } else {
        return [];
    }
}
