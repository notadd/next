import { MiddlewaresConsumer } from "@nestjs/common";
import { WorkflowService } from "../services";
export declare class WorkflowModule {
    private readonly workflowService;
    constructor(workflowService: WorkflowService);
    configure(consumer: MiddlewaresConsumer): Promise<void>;
}
