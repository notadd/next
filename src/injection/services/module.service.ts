import { Component } from "@nestjs/common";
import { Module } from "../../../packages/core/injectors/module.injector";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class ModuleService {
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Module> }
     */
    public async disableModule(identification: string): Promise<Module> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Module> }
     */
    public async enableModule(identification: string): Promise<Module> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Module> }
     */
    public async getModule(identification: string): Promise<Module> {
    }

    /**
     * @param { Object } filter
     * @returns { Promise<Array<Module>> }
     */
    public async getModules(filter: object): Promise<Array<Module>> {
        return [];
    }

    /**
     * @param { string } identification
     * @returns { Promise<Module> }
     */
    public async installModule(identification: string): Promise<Module> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Module> }
     */
    public async uninstallModule(identification: string): Promise<Module> {
    }
}
