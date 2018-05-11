import { DashboardMetadata } from "../interfaces";
import { ModulesContainer } from "@nestjs/core/injector";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { Injectable as InjectableInterface } from "@nestjs/common/interfaces";
export declare class DashboardExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    private metadata;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner);
    explore(): any;
    protected extractMetadata(instance: any, prototype: any, methodName: string): DashboardMetadata;
    protected filterDashboards(instance: InjectableInterface): Array<DashboardMetadata>;
    protected flatMap(components: Array<Map<any, any>>, callback: (instance: any) => Array<DashboardMetadata>): any;
}
