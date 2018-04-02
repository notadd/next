import { Addon as AddonInterface } from "../interfaces";
import { SettingService } from "@notadd/setting/services";
export declare class AddonLoader {
    protected caches: Array<AddonInterface>;
    protected filePathForCache: string;
    readonly addons: Array<AddonInterface>;
    constructor();
    loadEnabledAddons(): AddonInterface[];
    refresh(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadCaches(): void;
}
export declare const Addon: AddonLoader;
