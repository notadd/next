import { SettingService } from "@notadd/setting/services";
import { InjectionLoader } from "./injection.loader";
import { ModuleCache } from "../interfaces";
import { Module as ModuleInterface } from "../interfaces/module.interface";
export declare class ModuleLoader extends InjectionLoader {
    protected cacheForModules: Array<ModuleInterface>;
    protected filePathForCache: string;
    readonly modules: Array<ModuleInterface>;
    constructor();
    refresh(): this;
    syncWithSetting(setting: SettingService): Promise<this>;
    loadCachesFromJson(): ModuleCache;
    protected loadModulesFromCaches(): void;
    protected syncCachesToFile(): void;
}
export declare const module: ModuleLoader;
