import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { ExternalContextCreator } from "@nestjs/core/helpers/external-context-creator";
export declare class DashboardExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    private readonly externalContextCreator;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner, externalContextCreator: ExternalContextCreator);
}
