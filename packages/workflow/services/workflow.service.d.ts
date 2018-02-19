import { IWorkflowHost } from "workflow-es";
export declare class WorkflowService {
    private readonly host;
    constructor();
    getHost(): IWorkflowHost;
    start(): Promise<void>;
}
