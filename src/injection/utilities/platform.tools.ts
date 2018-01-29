import * as path from "path";

export class PlatformTools {
    /**
     * @param { string } name
     *
     * @returns { any }
     */
    static load(name: string): any {
        try {
            switch (name) {
                default:
                    return require(name);
            }
        } catch (err) {
            if (!path.isAbsolute(name) && name.substr(0, 2) !== "./" && name.substr(0, 3) !== "../") {
                return require(path.resolve(process.cwd() + "/node_modules/" + name));
            }

            throw err;
        }
    }
}
