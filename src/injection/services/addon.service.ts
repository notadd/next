import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { Addon } from "@notadd/core/injectors/addon.injector";

@Component()
export class AddonService {
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    public async disableAddon(identification: string): Addon {
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    public async enableAddon(identification: string): Addon {
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    public async getAddon(identification: string): Addon {
    }

    /**
     * @param filter
     * @returns { Array<Addon> }
     */
    public async getAddons(filter): Array<Addon> {
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    public async installAddon(identification: string): Addon {
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    public async uninstallAddon(identification: string): Addon {
    }
}
