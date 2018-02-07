import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { Module } from "../../../packages/core/injectors/module.injector";

@Component()
export class ModuleService {
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    public async disableModule(identification: string): Module {
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    public async enableModule(identification: string): Module {
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    public async getModule(identification: string): Module {
    }

    /**
     * @param { Object } filter
     * @returns { Module }
     */
    public async getModules(filter: object): Module {
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    public async installModule(identification: string): Module {
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    public async uninstallModule(identification: string): Module {
    }
}
