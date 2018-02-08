import { Addon } from "@notadd/core/injectors/addon.injector";
import { Component } from "@nestjs/common";
import { InjectionService } from "./injection.service";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class AddonService {
    constructor(
        private readonly injectionService: InjectionService,
        private readonly settingService: SettingService,
    ) {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Addon> }
     */
    public async disableAddon(identification: string): Promise<Addon> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Addon> }
     */
    public async enableAddon(identification: string): Promise<Addon> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Addon> }
     */
    public async getAddon(identification: string): Promise<Addon> {
    }

    /**
     * @param filter
     * @returns { Promise<Array<Addon>> }
     */
    public async getAddons(filter): Promise<Array<Addon>> {
        return [];
    }

    /**
     * @param { string } identification
     * @returns { Promise<Addon> }
     */
    public async installAddon(identification: string): Promise<Addon> {
    }

    /**
     * @param { string } identification
     * @returns { Promise<Addon> }
     */
    public async uninstallAddon(identification: string): Promise<Addon> {
    }
}
