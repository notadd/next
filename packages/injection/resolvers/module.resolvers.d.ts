import { Module } from "../types/module.type";
import { ModuleService } from "../services/module.service";
import { Result } from "@notadd/core/types/result.type";
export declare class ModuleResolvers {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    disableModule(identification: string): Promise<Result | undefined>;
    enableModule(identification: string): Promise<Result | undefined>;
    getModule(identification: string): Promise<Module | undefined>;
    getModules(filter: object): Promise<Array<Module>>;
    installModule(identification: string): Promise<Result | undefined>;
    uninstallModule(identification: string): Promise<Result | undefined>;
}
