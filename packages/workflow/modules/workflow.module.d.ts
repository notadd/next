import { MiddlewaresConsumer } from "@nestjs/common";
import { WorkflowService } from "../services";
import { WorkflowExplorerService } from "../services/workflow-explorer.service";
export declare class WorkflowModule {
    private readonly workflowExplorerService;
    private readonly workflowService;
    constructor(workflowExplorerService: WorkflowExplorerService, workflowService: WorkflowService);
    configure(consumer: MiddlewaresConsumer): Promise<void>;
}
