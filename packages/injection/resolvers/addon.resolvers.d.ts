import { Addon } from "@notadd/core/injectors/addon.injector";
import { AddonService } from "../services/addon.service";
export declare class AddonResolvers {
    private readonly addonService;
    constructor(addonService: AddonService);
    disableAddon(identification: string): Promise<Addon>;
    enableAddon(identification: string): Promise<Addon>;
    getAddon(identification: string): Promise<Addon>;
    getAddons(filter: any): Promise<Array<Addon>>;
    installAddon(identification: string): Promise<Addon>;
    uninstallAddon(identification: string): Promise<Addon>;
}
