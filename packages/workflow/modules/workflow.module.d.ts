import { MiddlewaresConsumer } from "@nestjs/common";
import { WorkflowExplorerService, WorkflowService } from "../services";
export declare class WorkflowModule {
    private readonly workflowExplorerService;
    private readonly workflowService;
    constructor(workflowExplorerService: WorkflowExplorerService, workflowService: WorkflowService);
    configure(consumer: MiddlewaresConsumer): Promise<void>;
}
