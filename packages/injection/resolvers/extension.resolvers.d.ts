import { ExtensionService } from "../services/extension.service";
import { Extension } from "../../../packages/core/injectors/extension.injector";
export declare class ExtensionResolvers {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    disableExtension(identification: string): Extension;
    enableExtension(identification: string): Extension;
    getExtension(identification: string): Extension;
    getExtensions(filter: object): Extension;
    installExtension(identification: string): Extension;
    uninstallExtension(identification: string): Extension;
}
