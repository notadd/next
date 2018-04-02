import { Extension } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
import { ExtensionCache } from "../interfaces";
export declare class ExtensionLoader extends InjectionLoader {
    protected cacheForExtensions: Array<Extension>;
    protected filePathForCache: string;
    readonly extensions: Array<Extension>;
    constructor();
    loadCachesFromJson(): ExtensionCache;
    refreshExtensions(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadExtensionsFromCache(): void;
    protected syncCachesToFile(): void;
}
export declare const Extension: ExtensionLoader;
