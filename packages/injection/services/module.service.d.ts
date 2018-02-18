import "reflect-metadata";
import { InjectionService } from "./injection.service";
import { Module } from "../types";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ModuleService {
    private readonly injectionService;
    private readonly settingService;
    private initialized;
    private modules;
    constructor(injectionService: InjectionService, settingService: SettingService);
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
