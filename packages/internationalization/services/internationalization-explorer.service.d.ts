import { Injectable } from "@nestjs/common/interfaces";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PhraseMetadata } from "../metadatas";
export declare class InternationalizationExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    private metadata;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner);
    explore(): Array<PhraseMetadata>;
    protected extractMetadata(instance: any, prototype: any, methodName: string): PhraseMetadata;
    filterPhrases(instance: Injectable): Array<PhraseMetadata>;
    protected flatMap(components: Map<any, any>[], callback: (instance: any) => Array<PhraseMetadata>): any;
}
