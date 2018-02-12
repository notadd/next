import { Extension } from "../types/extension.type";
import { ExtensionService } from "../services/extension.service";
import { Result } from "@notadd/core/types/result.type";
export declare class ExtensionResolvers {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    disableExtension(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    enableExtension(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    getExtension(context: any, args: {
        identification: string;
    }): Promise<Extension | undefined>;
    getExtensions(filter: object): Promise<Array<Extension>>;
    installExtension(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    uninstallExtension(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
}
