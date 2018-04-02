import { Module as ModuleInterface } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
export declare class ModuleLoader extends InjectionLoader {
    protected cacheForModules: Array<ModuleInterface>;
    protected filePathForEnabledCache: string;
    constructor();
    refreshModules(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    protected loadModulesFromCaches(): void;
}
export declare const Module: ModuleLoader;
