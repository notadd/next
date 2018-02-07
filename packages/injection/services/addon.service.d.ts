import { SettingService } from "@notadd/setting/services/setting.service";
import { Addon } from "@notadd/core/injectors/addon.injector";
export declare class AddonService {
    private readonly settingService;
    constructor(settingService: SettingService);
    disableAddon(identification: string): Addon;
    enableAddon(identification: string): Addon;
    getAddon(identification: string): Addon;
    getAddons(filter: any): Array<Addon>;
    installAddon(identification: string): Addon;
    uninstallAddon(identification: string): Addon;
}
