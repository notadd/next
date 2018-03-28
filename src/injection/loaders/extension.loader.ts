import { Extension as ExtensionInterface } from "../interfaces";

export class ExtensionLoader {
    protected extensions: Array<ExtensionInterface>;

    protected filePathForEnabledCache = `${process.cwd()}/storages/extensions/enabled.json`;

    constructor() {

    }

    public load() {

    }
}

export const Extension = new ExtensionLoader();
