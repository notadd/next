import { Extension as ExtensionInterface } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
import { ExtensionCache } from "../interfaces";
export declare class ExtensionLoader extends InjectionLoader {
    protected cacheForExtensions: Array<ExtensionInterface>;
    protected filePathForCache: string;
    readonly extensions: Array<ExtensionInterface>;
    constructor();
    loadCachesFromJson(): ExtensionCache;
    refreshExtensions(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadExtensionsFromCache(): void;
}
export declare const Extension: ExtensionLoader;
