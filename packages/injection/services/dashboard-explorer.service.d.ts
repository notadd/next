import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
import { ExternalContextCreator } from "@nestjs/core/helpers/external-context-creator";
import { Injectable } from "@nestjs/common/interfaces";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
export declare class DashboardExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    private readonly externalContextCreator;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner, externalContextCreator: ExternalContextCreator);
    explore(): any;
    protected extractMetadata(instance: any, prototype: any, methodName: string): DashboardMetadata;
    protected filterDashboards(instance: Injectable): Array<DashboardMetadata>;
    protected flatMap(components: Map<any, any>[], callback: (instance: any) => Array<DashboardMetadata>): any;
}
