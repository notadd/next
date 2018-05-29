import { Result } from "@notadd/core/interfaces";
import { AddonService } from "../services/addon.service";
import { Addon } from "../interfaces/addon.interface";
export declare class AddonResolvers {
    private readonly addonService;
    constructor(addonService: AddonService);
    disableAddon(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    enableAddon(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    getAddon(context: any, args: {
        identification: string;
    }): Promise<Addon | undefined>;
    getAddons(context: any, args: {
        filters: any;
    }): Promise<Array<Addon>>;
    installAddon(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    uninstallAddon(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
}
