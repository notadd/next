import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { ModulesContainer } from "@nestjs/core/injector";
import { SettingService } from "@notadd/setting/services/setting.service";
import { WorkflowMetadata } from "../metadatas/workflow.metadata";
import { Injectable } from "@nestjs/common/interfaces";
export declare class WorkflowExplorerService {
    private readonly modulesContainer;
    private readonly metadataScanner;
    private readonly settingService;
    private category;
    private identification;
    constructor(modulesContainer: ModulesContainer, metadataScanner: MetadataScanner, settingService: SettingService);
    explore(): Array<WorkflowMetadata>;
    protected filterWorkflows(instance: Injectable, metatype: any): Array<WorkflowMetadata>;
}
