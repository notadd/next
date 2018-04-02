import { Addon } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
import { AddonCache } from "../interfaces";
export declare class AddonLoader extends InjectionLoader {
    protected cacheForAddons: Array<Addon>;
    protected filePathForCache: string;
    readonly addons: Array<Addon>;
    constructor();
    loadCachesFromJson(): AddonCache;
    refreshAddons(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadAddonsFromCache(): void;
    protected syncCachesToFile(): void;
}
export declare const Addon: AddonLoader;
