import { Module as ModuleInterface } from "../interfaces";
import { SettingService } from "@notadd/setting/services";
export declare class ModuleLoader {
    protected caches: Array<ModuleInterface>;
    protected filePathForEnabledCache: string;
    constructor();
    refresh(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadCaches(): void;
}
export declare const Module: ModuleLoader;
