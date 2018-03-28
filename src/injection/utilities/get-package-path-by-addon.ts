import { Addon } from "../interfaces";
import { dirname, join } from "path";
import { existsSync } from "fs";

export function getPackagePathByAddon(addon: Addon): string {
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

    return getPath(dirname(addon.location));
}
