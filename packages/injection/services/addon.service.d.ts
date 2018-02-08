import { Addon } from "@notadd/core/injectors/addon.injector";
import { InjectionService } from "./injection.service";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class AddonService {
    private readonly injectionService;
    private readonly settingService;
    constructor(injectionService: InjectionService, settingService: SettingService);
    disableAddon(identification: string): Promise<Addon>;
    enableAddon(identification: string): Promise<Addon>;
    getAddon(identification: string): Promise<Addon>;
    getAddons(filter: any): Promise<Array<Addon>>;
    installAddon(identification: string): Promise<Addon>;
    uninstallAddon(identification: string): Promise<Addon>;
}
