import "reflect-metadata";
import { Extension } from "../types";
import { InjectionService } from "./injection.service";
import { Result } from "@notadd/core/types/result.type";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ExtensionService {
    private readonly injectionService;
    private readonly settingService;
    private initialized;
    private extensions;
    constructor(injectionService: InjectionService, settingService: SettingService);
    getExtension(identification: string): Promise<Extension | undefined>;
    getExtensions(filter: {
        enabled?: boolean;
        installed?: boolean;
    }): Promise<Array<Extension>>;
    installExtension(identification: string): Promise<Result | undefined>;
    uninstallExtension(identification: string): Promise<Result | undefined>;
}
