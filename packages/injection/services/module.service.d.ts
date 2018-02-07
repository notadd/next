import { Module } from "../../../packages/core/injectors/module.injector";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ModuleService {
    private readonly settingService;
    constructor(settingService: SettingService);
    disableModule(identification: string): Promise<Module>;
    enableModule(identification: string): Promise<Module>;
    getModule(identification: string): Promise<Module>;
    getModules(filter: object): Promise<Array<Module>>;
    installModule(identification: string): Promise<Module>;
    uninstallModule(identification: string): Promise<Module>;
}
