import { Extension } from "../../../packages/core/injectors/extension.injector";
import { InjectionService } from "./injection.service";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ExtensionService {
    private readonly injectionService;
    private readonly settingService;
    constructor(injectionService: InjectionService, settingService: SettingService);
    disableExtension(identification: string): Promise<Extension>;
    enableExtension(identification: string): Promise<Extension>;
    getExtension(identification: string): Promise<Extension>;
    getExtensions(filter: object): Promise<Array<Extension>>;
    installExtension(identification: string): Promise<Extension>;
    uninstallExtension(identification: string): Promise<Extension>;
}
