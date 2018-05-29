import { Result } from "@notadd/core/interfaces";
import { SettingService } from "@notadd/setting/services/setting.service";
import { Module } from "../interfaces";
import { ModuleLoader } from "../loaders";
export declare class ModuleService {
    private readonly settingService;
    protected loader: ModuleLoader;
    constructor(settingService: SettingService);
    disableModule(identification: string): Promise<Result | undefined>;
    enableModule(identification: string): Promise<Result | undefined>;
    getModule(identification: string): Promise<Module | undefined>;
    getModules(filter: {
        installed?: boolean;
        enabled?: boolean;
    }): Promise<Array<Module>>;
    installModule(identification: string): Promise<Result | undefined>;
    uninstallModule(identification: string): Promise<Result | undefined>;
    protected dropSchema(module: Module): Promise<void>;
    protected syncSchema(module: Module): Promise<void>;
}
