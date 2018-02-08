import { Addon } from "../types/addon.type";
import { AddonService } from "../services/addon.service";
export declare class AddonResolvers {
    private readonly addonService;
    constructor(addonService: AddonService);
    disableAddon(identification: string): Promise<Addon | undefined>;
    enableAddon(identification: string): Promise<Addon | undefined>;
    getAddon(identification: string): Promise<Addon | undefined>;
    getAddons(filter: any): Promise<Array<Addon>>;
    installAddon(identification: string): Promise<Addon | undefined>;
    uninstallAddon(identification: string): Promise<Addon | undefined>;
}
