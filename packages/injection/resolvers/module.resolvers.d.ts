import { ModuleService } from "../services/module.service";
import { Module } from "../../../packages/core/injectors/module.injector";
export declare class ModuleResolvers {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    disableModule(identification: string): Promise<Module>;
    enableModule(identification: string): Promise<Module>;
    getModule(identification: string): Promise<Module | undefined>;
    getModules(filter: object): Promise<Array<Module>>;
    installModule(identification: string): Promise<Module>;
    uninstallModule(identification: string): Promise<Module>;
}
