import { Extension as ExtensionInterface } from "../interfaces";
import { SettingService } from "@notadd/setting/services";
export declare class ExtensionLoader {
    protected caches: Array<ExtensionInterface>;
    protected filePathForEnabledCache: string;
    readonly extensions: Array<ExtensionInterface>;
    constructor();
    refresh(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadCaches(): void;
}
export declare const Extension: ExtensionLoader;
