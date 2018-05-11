import { AddonCache } from "../interfaces";
import { existsSync } from "fs";
import { importClassesFromDirectories } from "./import-classes-from-directories";
import { join } from "path";
import { Json } from "@notadd/core/loaders";
import { Type } from "@nestjs/common";

export function loadAddonsFromFiles(): Array<Type<any>> {
    const file = join(process.cwd(), "storages", "caches", "addon.json");
    if (existsSync(file)) {
        const caches = Json.load<AddonCache>(file);

        return importClassesFromDirectories(caches.enabled ? caches.enabled : []);
    } else {
        return [];
    }
}
