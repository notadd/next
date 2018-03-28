import { dirname, join } from "path";
import { existsSync } from "fs";
import { Module } from "../interfaces";

export function getPackagePathByModule(module: Module): string {
    function getPath(base: string) {
        if (base.length === 0) {
            return "";
        } else {
            if (existsSync(join(base, "package.json"))) {
                return base;
            } else {
                return getPath(dirname(base));
            }
        }
    }

    return getPath(dirname(module.location));
}
