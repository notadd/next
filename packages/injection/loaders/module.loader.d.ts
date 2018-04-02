import { Module as ModuleInterface, ModuleCache } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
export declare class ModuleLoader extends InjectionLoader {
    protected cacheForModules: Array<ModuleInterface>;
    protected filePathForCache: string;
    constructor();
    refreshModules(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    loadCachesFromJson(): ModuleCache;
    protected loadModulesFromCaches(): void;
}
export declare const Module: ModuleLoader;
