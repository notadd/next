import { IWorkflowExecutor } from "../abstractions";
import { WorkflowInstance, ExecutionPointer, ExecutionResult, WorkflowStepBase, WorkflowExecutorResult } from "../models";
export declare class WorkflowExecutor implements IWorkflowExecutor {
    private registry;
    private logger;
    execute(instance: WorkflowInstance): Promise<WorkflowExecutorResult>;
    processExecutionResult(stepResult: ExecutionResult, pointer: ExecutionPointer, instance: WorkflowInstance, step: WorkflowStepBase): void;
    determineNextExecutionTime(instance: WorkflowInstance): void;
    isBranchComplete(pointers: ExecutionPointer[], rootId: string): boolean;
}
