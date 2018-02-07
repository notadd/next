import { Extension } from "@notadd/core/injectors/extension.injector";
import { ExtensionService } from "../services/extension.service";
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
