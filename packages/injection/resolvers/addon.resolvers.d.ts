import { AddonService } from "../services/addon.service";
import { Addon } from "../../../packages/core/injectors/addon.injector";
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
