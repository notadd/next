import { Addon } from "../types/addon.type";
import { AddonService } from "../services/addon.service";
import { Result } from "@notadd/core/types/result.type";
export declare class AddonResolvers {
    private readonly addonService;
    constructor(addonService: AddonService);
    disableAddon(identification: string): Promise<Result | undefined>;
    enableAddon(identification: string): Promise<Result | undefined>;
    getAddon(identification: string): Promise<Addon | undefined>;
    getAddons(filter: any): Promise<Array<Addon>>;
    installAddon(identification: string): Promise<Result | undefined>;
    uninstallAddon(identification: string): Promise<Result | undefined>;
}
