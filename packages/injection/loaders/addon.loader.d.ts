import { Addon as AddonInterface } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
import { AddonCache } from "../interfaces";
export declare class AddonLoader extends InjectionLoader {
    protected cacheForAddons: Array<AddonInterface>;
    protected filePathForCache: string;
    readonly addons: Array<AddonInterface>;
    constructor();
    loadCachesFromJson(): AddonCache;
    refreshAddons(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadAddonsFromCache(): void;
}
export declare const Addon: AddonLoader;
