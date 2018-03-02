import { Module } from "../types";
import { ModuleService } from "../services";
import { Result } from "@notadd/core/types/result.type";
export declare class ModuleResolvers {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    disableModule(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    enableModule(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    getModule(context: any, args: {
        identification: string;
    }): Promise<Module | undefined>;
    getModules(context: any, args: {
        filters: any;
    }): Promise<Array<Module>>;
    installModule(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    uninstallModule(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
}
