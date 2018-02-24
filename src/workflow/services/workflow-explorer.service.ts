import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { WorkflowMetadata } from "../metadatas/workflow.metadata";

@Component()
export class WorkflowExplorerService {
    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @returns { Array<WorkflowMetadata> }
     */
    public explore(): Array<WorkflowMetadata> {
        return [];
    }
}
