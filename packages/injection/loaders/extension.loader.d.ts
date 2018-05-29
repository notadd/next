import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
import { ExtensionCache } from "../interfaces/extension-cache.interface";
import { Extension as ExtensionInterface } from "../interfaces/extension.interfaces";
export declare class ExtensionLoader extends InjectionLoader {
    protected cacheForExtensions: Array<ExtensionInterface>;
    protected filePathForCache: string;
    readonly extensions: Array<ExtensionInterface>;
    constructor();
    loadCachesFromJson(): ExtensionCache;
    refresh(): this;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadExtensionsFromCache(): void;
    protected syncCachesToFile(): void;
}
export declare const Extension: ExtensionLoader;
