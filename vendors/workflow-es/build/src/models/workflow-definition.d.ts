import { WorkflowStepBase } from "./workflow-step";
export declare class WorkflowDefinition {
    id: string;
    version: number;
    description: string;
    steps: Array<WorkflowStepBase>;
    errorBehavior: number;
    retryInterval: number;
}
