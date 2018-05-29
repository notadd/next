import { existsSync } from "fs";
import { join } from "path";
import { Json } from "@notadd/core/loaders";
import { Type } from "@nestjs/common";

import { importClassesFromDirectories } from "./import-classes-from-directories";
import { ModuleCache } from "../interfaces/module-cache.interface";

export function loadModulesFromFiles(): Array<Type<any>> {
    const file = join(process.cwd(), "storages", "caches", "module.json");
    if (existsSync(file)) {
        const caches = Json.load<ModuleCache>(file);

        return importClassesFromDirectories(caches.enabled ? caches.enabled : []);
    } else {
        return [];
    }
}
