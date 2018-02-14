import { Injectable } from "@nestjs/common/interfaces";
import { ExternalContextCreator } from "@nestjs/core/helpers/external-context-creator";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PageMetadata } from "../metadatas/page.metadata";
export declare class PageExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    private readonly externalContextCreator;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner, externalContextCreator: ExternalContextCreator);
    explore(): any;
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
    protected filterPages(instance: Injectable, metatype: any): Array<PageMetadata>;
}
