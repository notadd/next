import { dirname, join } from "path";
import { exists } from "fs";
import { Module } from "../types";

export function getPackagePathByModule(module: Module): string {
    function getPath(base: string) {
        if (base.length === 0) {
            return "";
        } else {
            if (exists(join(base, "package.json"))) {
                return base;
            } else {
                return getPath(dirname(base));
            }
        }
    }

    return getPath(dirname(module.location));
}
