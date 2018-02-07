import { Extension } from "../../../packages/core/injectors/extension.injector";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ExtensionService {
    private readonly settingService;
    constructor(settingService: SettingService);
    disableExtension(identification: string): Extension;
    enableExtension(identification: string): Extension;
    getExtension(identification: string): Extension;
    getExtensions(filter: object): Extension;
    installExtension(identification: string): Extension;
    uninstallExtension(identification: string): Extension;
}
