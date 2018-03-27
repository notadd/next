export class JsonLoader {
    /**
     * @param { string } path
     *
     * @returns { T }
     */
    load<T>(path: string): T {
        return require(path);
    }
}

export const Json = new JsonLoader();
