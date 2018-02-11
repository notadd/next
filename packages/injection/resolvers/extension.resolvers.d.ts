import { Extension } from "../types/extension.type";
import { ExtensionService } from "../services/extension.service";
import { Result } from "@notadd/core/types/result.type";
export declare class ExtensionResolvers {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    disableExtension(identification: string): Promise<Result | undefined>;
    enableExtension(identification: string): Promise<Result | undefined>;
    getExtension(identification: string): Promise<Extension | undefined>;
    getExtensions(filter: object): Promise<Array<Extension>>;
    installExtension(identification: string): Promise<Result | undefined>;
    uninstallExtension(identification: string): Promise<Result | undefined>;
}
