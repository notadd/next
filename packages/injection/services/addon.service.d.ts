import "reflect-metadata";
import { Addon } from "../types";
import { InjectionService } from "./injection.service";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class AddonService {
    private readonly injectionService;
    private readonly settingService;
    private initialized;
    private addons;
    constructor(injectionService: InjectionService, settingService: SettingService);
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
