import { existsSync } from "fs";
import { importClassesFromDirectories } from "./import-classes-from-directories";
import { join } from "path";
import { Json } from "@notadd/core/loaders";
import { ModuleCache } from "../interfaces";
import { Type } from "@nestjs/common";

export function loadModulesFromFiles(): Array<Type<any>> {
    const file = join(process.cwd(), "storages", "caches", "module.json");
    if (existsSync(file)) {
        const caches = Json.load<ModuleCache>(file);

        return importClassesFromDirectories(caches.enabled ? caches.enabled : []);
    } else {
        return [];
    }
}
