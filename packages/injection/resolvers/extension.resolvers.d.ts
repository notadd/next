import { Extension } from "../types/extension.type";
import { ExtensionService } from "../services/extension.service";
export declare class ExtensionResolvers {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    disableExtension(identification: string): Promise<Extension>;
    enableExtension(identification: string): Promise<Extension>;
    getExtension(identification: string): Promise<Extension | undefined>;
    getExtensions(filter: object): Promise<Array<Extension>>;
    installExtension(identification: string): Promise<Extension>;
    uninstallExtension(identification: string): Promise<Extension>;
}
