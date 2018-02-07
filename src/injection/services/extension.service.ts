import { Component } from "@nestjs/common";
import { Extension } from "../../../packages/core/injectors/extension.injector";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class ExtensionService {
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Extension> }
     */
    public async disableExtension(identification: string): Promise<Extension> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Extension> }
     */
    public async enableExtension(identification: string): Promise<Extension> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Extension> }
     */
    public async getExtension(identification: string): Promise<Extension> {
    }

    /**
     * @param { Object } filter
     * @returns { Promise<Array<Extension>> }
     */
    public async getExtensions(filter: object): Promise<Array<Extension>> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Extension> }
     */
    public async installExtension(identification: string): Promise<Extension> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Extension> }
     */
    public async uninstallExtension(identification: string): Promise<Extension> {
    }
}
