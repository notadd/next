import { Extension } from "../interfaces";
import { Result } from "@notadd/core/interfaces";
import { SettingService } from "@notadd/setting/services/setting.service";
import { ExtensionLoader } from "../loaders";
export declare class ExtensionService {
    private readonly settingService;
    protected loader: ExtensionLoader;
    constructor(settingService: SettingService);
    getExtension(identification: string): Promise<Extension | undefined>;
    getExtensions(filter: {
        enabled?: boolean;
        installed?: boolean;
    }): Promise<Array<Extension>>;
    installExtension(identification: string): Promise<Result | undefined>;
    uninstallExtension(identification: string): Promise<Result | undefined>;
}
