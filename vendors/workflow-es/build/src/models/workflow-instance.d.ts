import { ExecutionPointer } from "./execution-pointer";
export declare class WorkflowInstance {
    id: string;
    workflowDefinitionId: string;
    version: number;
    description: string;
    nextExecution: number;
    status: number;
    data: any;
    createTime: Date;
    completeTime: Date;
    executionPointers: Array<ExecutionPointer>;
    constructor();
}
