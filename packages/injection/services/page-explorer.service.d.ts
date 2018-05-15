import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PageMetadata } from "../metadatas";
import { Injectable as InjectableInterface } from "@nestjs/common/interfaces";
export declare class PageExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner);
    explore(): Array<PageMetadata>;
    protected extractMetadata(instance: any, prototype: any, methodName: string): {
        form: {
            callback: any;
            name: any;
        };
        schema: {
            callback: any;
            name: any;
        };
    };
    protected filterPages(instance: InjectableInterface, metatype: any): Array<PageMetadata>;
}
