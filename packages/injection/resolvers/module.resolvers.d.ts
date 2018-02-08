import { Module } from "../types/module.type";
import { ModuleService } from "../services/module.service";
export declare class ModuleResolvers {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    disableModule(identification: string): Promise<Module | undefined>;
    enableModule(identification: string): Promise<Module | undefined>;
    getModule(identification: string): Promise<Module | undefined>;
    getModules(filter: object): Promise<Array<Module>>;
    installModule(identification: string): Promise<Module | undefined>;
    uninstallModule(identification: string): Promise<Module | undefined>;
}
