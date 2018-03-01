import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PhraseMetadata } from "../metadatas/phrase.metadata";
export declare class InternationalizationExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner);
    explore(): Array<PhraseMetadata>;
}
