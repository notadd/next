import { Extension } from "../types";
import { ExtensionService } from "../services";
import { Result } from "@notadd/core/types/result.type";
export declare class ExtensionResolvers {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    getExtension(context: any, args: {
        identification: string;
    }): Promise<Extension | undefined>;
    getExtensions(context: any, args: {
        filters: any;
    }): Promise<Array<Extension>>;
    installExtension(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
    uninstallExtension(context: any, args: {
        identification: string;
    }): Promise<Result | undefined>;
}
