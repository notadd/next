import * as loadJsonFile from "load-json-file";
import { Logger } from "@nestjs/common";

export class JsonLoader {
    protected logger = new Logger("JsonLoader");

    /**
     * @param { string } path
     *
     * @returns { T }
     */
    public load<T>(path: string): T {
        return loadJsonFile.sync(path);
    }
}

export const Json = new JsonLoader();
