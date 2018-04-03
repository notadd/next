import * as loadJsonFile from "load-json-file";
import { dirname } from "path";
import { existsSync } from "fs";
import { Logger } from "@nestjs/common";

export class JsonLoader {
    protected logger = new Logger("JsonLoader");

    /**
     * @param { string } path
     *
     * @returns { T }
     */
    public load<T>(path: string): T {
        if (!existsSync(dirname(path)) && !existsSync(path)) {
            this.logger.error(`File \`${path}\` or its directory \`${dirname(path)}\` do not exists`);
        } else {
            if (existsSync(path)) {
                return loadJsonFile.sync(path);
            } else {
                return {};
            }
        }
    }
}

export const Json = new JsonLoader();
