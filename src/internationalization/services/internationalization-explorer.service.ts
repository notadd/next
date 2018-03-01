import { Component } from "@nestjs/common";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PhraseMetadata } from "../metadatas/phrase.metadata";

@Component()
export class InternationalizationExplorerService {
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
    ) {
    }

    public explore(): Array<PhraseMetadata> {
        return [];
    }
}
