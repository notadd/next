import { Addon } from "@notadd/core/injectors/addon.injector";
import { AddonService } from "../services/addon.service";
export declare class AddonResolvers {
    private readonly addonService;
    constructor(addonService: AddonService);
    disableAddon(identification: string): Addon;
    enableAddon(identification: string): Addon;
    getAddon(identification: string): Addon;
    getAddons(filter: any): Array<Addon>;
    installAddon(identification: string): Addon;
    uninstallAddon(identification: string): Addon;
}
