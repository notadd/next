import { AddonCache } from "../interfaces";
import { existsSync } from "fs";
import { importClassesFromDirectories } from "./import-classes-from-directories";
import { join } from "path";
import { Json } from "@notadd/core/loaders";

export function loadAddonsFromFiles(): Array<Function> {
    const file = join(process.cwd(), "storages", "caches", "addon.json");
    if (existsSync(file)) {
        let caches = Json.load<AddonCache>(file);

        return importClassesFromDirectories(caches.enabled ? caches.enabled : []);
    } else {
        return [];
    }
}
