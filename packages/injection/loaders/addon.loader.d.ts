import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
import { AddonCache } from "../interfaces/addon-cache.interface";
import { Addon as AddonInterface } from "../interfaces/addon.interface";
export declare class AddonLoader extends InjectionLoader {
    protected cacheForAddons: Array<AddonInterface>;
    protected filePathForCache: string;
    readonly addons: Array<AddonInterface>;
    constructor();
    loadCachesFromJson(): AddonCache;
    refresh(): this;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadAddonsFromCache(): void;
    protected syncCachesToFile(): void;
}
export declare const Addon: AddonLoader;
