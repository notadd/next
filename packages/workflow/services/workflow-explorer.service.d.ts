import { SettingService } from "@notadd/setting/services/setting.service";
import { WorkflowMetadata } from "../metadatas/workflow.metadata";
export declare class WorkflowExplorerService {
    private readonly settingService;
    constructor(settingService: SettingService);
    explore(): Array<WorkflowMetadata>;
}
