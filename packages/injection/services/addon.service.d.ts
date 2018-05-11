import { Addon } from "../interfaces";
import { AddonLoader } from "../loaders";
import { Result } from "@notadd/core/interfaces";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class AddonService {
    private readonly settingService;
    protected loader: AddonLoader;
    constructor(settingService: SettingService);
    disableAddon(identification: string): Promise<Result | undefined>;
    enableAddon(identification: string): Promise<Result | undefined>;
    getAddon(identification: string): Promise<Addon | undefined>;
    getAddons(filter: {
        enabled?: boolean;
        installed?: boolean;
    }): Promise<Array<Addon>>;
    installAddon(identification: string): Promise<Result | undefined>;
    uninstallAddon(identification: string): Promise<Result | undefined>;
    protected dropSchema(addon: Addon): Promise<void>;
    protected syncSchema(addon: Addon): Promise<void>;
}
