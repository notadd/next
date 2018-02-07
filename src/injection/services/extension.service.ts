import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { Extension } from "../../../packages/core/injectors/extension.injector";

@Component()
export class ExtensionService {
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    public async disableExtension(identification: string): Extension {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    public async enableExtension(identification: string): Extension {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    public async getExtension(identification: string): Extension {
    }

    /**
     * @param { Object } filter
     * @returns { Extension }
     */
    public async getExtensions(filter: object): Extension {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    public async installExtension(identification: string): Extension {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    public async uninstallExtension(identification: string): Extension {
    }
}
