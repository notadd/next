import { Module } from "../../../packages/core/injectors/module.injector";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ModuleService {
    private readonly settingService;
    constructor(settingService: SettingService);
    disableModule(identification: string): Module;
    enableModule(identification: string): Module;
    getModule(identification: string): Module;
    getModules(filter: object): Module;
    installModule(identification: string): Module;
    uninstallModule(identification: string): Module;
}
