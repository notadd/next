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

    /**
     * @param { string } pathString
     *
     * @returns { string }
     */
    static pathExtname(pathString: string): string {
        return path.extname(pathString);
    }

    /**
     * @param { string } pathString
     *
     * @returns { string }
     */
    static pathNormalize(pathString: string): string {
        return path.normalize(pathString);
    }

    /**
     * @param { string } pathString
     *
     * @returns { string }
     */
    static pathResolve(pathString: string): string {
        return path.resolve(pathString);
    }
}
