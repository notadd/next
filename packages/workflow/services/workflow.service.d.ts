import { IWorkflowHost } from "workflow-es";
import { WorkflowMetadata } from "../metadatas/workflow.metadata";
export declare class WorkflowService {
    private readonly host;
    private workflows;
    constructor();
    getHost(): IWorkflowHost;
    initialize(metadatas: Array<WorkflowMetadata>): void;
    start(): Promise<void>;
}
