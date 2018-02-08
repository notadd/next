import "reflect-metadata";
import { Addon } from "../types/addon.type";
import { InjectionService } from "./injection.service";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class AddonService {
    private readonly injectionService;
    private readonly settingService;
    private initialized;
    private addons;
    constructor(injectionService: InjectionService, settingService: SettingService);
    disableAddon(identification: string): Promise<Addon | undefined>;
    enableAddon(identification: string): Promise<Addon | undefined>;
    getAddon(identification: string): Promise<Addon | undefined>;
    getAddons(filter: any): Promise<Array<Addon>>;
    installAddon(identification: string): Promise<Addon | undefined>;
    uninstallAddon(identification: string): Promise<Addon | undefined>;
}
