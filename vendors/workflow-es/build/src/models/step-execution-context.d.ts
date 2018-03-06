import { WorkflowInstance } from "./workflow-instance";
import { WorkflowStepBase } from "./workflow-step";
import { ExecutionPointer } from "./execution-pointer";
export declare class StepExecutionContext {
    workflow: WorkflowInstance;
    step: WorkflowStepBase;
    pointer: ExecutionPointer;
    persistenceData: any;
    item: any;
}
