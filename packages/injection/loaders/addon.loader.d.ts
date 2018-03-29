import { Addon as AddonInterface } from "../interfaces";
import { SettingService } from "@notadd/setting/services";
export declare class AddonLoader {
    protected caches: Array<AddonInterface>;
    protected filePathForEnabledCache: string;
    protected initialize(): void;
    readonly addons: Array<AddonInterface>;
    loadEnabledAddons(): AddonInterface[];
    refresh(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadCaches(): this;
}
export declare const Addon: AddonLoader;
