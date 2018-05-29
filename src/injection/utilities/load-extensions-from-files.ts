import { existsSync } from "fs";
import { join } from "path";
import { Json } from "@notadd/core/loaders";
import { Type } from "@nestjs/common";

import { importClassesFromDirectories } from "./import-classes-from-directories";
import { ExtensionCache } from "../interfaces";

export function loadExtensionsFromFiles(): Array<Type<any>> {
    const file = join(process.cwd(), "storages", "caches", "extension.json");
    if (existsSync(file)) {
        const caches = Json.load<ExtensionCache>(file);

        return importClassesFromDirectories(caches.enabled ? caches.enabled : []);
    } else {
        return [];
    }
}
