import { Module as ModuleInterface, ModuleCache } from "../interfaces";
import { InjectionLoader } from "./injection.loader";
import { SettingService } from "@notadd/setting/services";
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
