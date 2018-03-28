import { Extension as ExtensionInterface } from "../interfaces";
export declare class ExtensionLoader {
    protected extensions: Array<ExtensionInterface>;
    protected filePathForEnabledCache: string;
    constructor();
    load(): void;
}
export declare const Extension: ExtensionLoader;
