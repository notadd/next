import { ModuleService } from "../services/module.service";
import { Module } from "../../../packages/core/injectors/module.injector";
export declare class ModuleResolvers {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    disableModule(identification: string): Module;
    enableModule(identification: string): Module;
    getModule(identification: string): Module;
    getModules(filter: object): Module;
    installModule(identification: string): Module;
    uninstallModule(identification: string): Module;
}
