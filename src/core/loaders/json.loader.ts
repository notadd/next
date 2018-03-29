import * as loadJsonFile from "load-json-file";

export class JsonLoader {
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
