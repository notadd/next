import { Extension as ExtensionInterface } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
export declare class ExtensionLoader extends InjectionLoader {
    protected cacheForExtensions: Array<ExtensionInterface>;
    protected filePathForEnabledCache: string;
    readonly extensions: Array<ExtensionInterface>;
    constructor();
    refreshExtensions(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadExtensionsFromCache(): void;
}
export declare const Extension: ExtensionLoader;
