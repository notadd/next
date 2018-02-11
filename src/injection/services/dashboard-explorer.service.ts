import { Component } from "@nestjs/common";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { ExternalContextCreator } from "@nestjs/core/helpers/external-context-creator";

@Component()
export class DashboardExplorerService {
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
        private readonly externalContextCreator: ExternalContextCreator,
    ) {
    }
}
