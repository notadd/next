import { Component } from "@nestjs/common";
import { flattenDeep } from "lodash";
import { Injectable } from "@nestjs/common/interfaces";
import { IS_WORKFLOW } from "../constants";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { ModulesContainer } from "@nestjs/core/injector";
import { SettingService } from "@notadd/setting/services/setting.service";
import { WorkflowMetadata } from "../metadatas";

@Component()
export class WorkflowExplorerService {
    private category: string = "category";

    private identification: string = "identification";

    /**
     * @param { ModulesContainer } modulesContainer
     * @param { MetadataScanner } metadataScanner
     * @param { SettingService } settingService
     */
    constructor(
        private readonly modulesContainer: ModulesContainer,
        private readonly metadataScanner: MetadataScanner,
        private readonly settingService: SettingService,
    ) {
    }

    /**
     * @returns { Array<WorkflowMetadata> }
     */
    public explore(): Array<WorkflowMetadata> {
        const components = [
            ...this.modulesContainer.values(),
        ].map(module => module.components);

        return flattenDeep(
            components.map(component =>
                [
                    ...component.values(),
                ]
                    .map(({ instance, metatype }) => this.filterWorkflows(instance, metatype)),
            ),
        );
    }

    /**
     * @param { Injectable } instance
     * @param metatype
     *
     * @returns { Array<WorkflowMetadata> }
     */
    protected filterWorkflows(instance: Injectable, metatype: any): Array<WorkflowMetadata> {
        const isWorkflow: boolean = Reflect.getMetadata(IS_WORKFLOW, metatype);
        const workflowMeta: WorkflowMetadata = {
            category: Reflect.getMetadata(this.category, metatype),
            identification: Reflect.getMetadata(this.identification, metatype),
        };

        if (isWorkflow && workflowMeta.identification) {
            workflowMeta.target = instance;

            return [
                workflowMeta,
            ]
        } else {
            return [];
        }
    }
}
