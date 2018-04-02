import { Module, ModuleCache } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
export declare class ModuleLoader extends InjectionLoader {
    protected cacheForModules: Array<Module>;
    protected filePathForCache: string;
    constructor();
    refreshModules(): void;
    syncWithSetting(setting: SettingService): Promise<this>;
    loadCachesFromJson(): ModuleCache;
    protected loadModulesFromCaches(): void;
    protected syncCachesToFile(): void;
}
export declare const Module: ModuleLoader;
