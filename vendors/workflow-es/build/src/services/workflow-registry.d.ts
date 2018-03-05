import { WorkflowDefinition } from "../models";
import { WorkflowBase, IWorkflowRegistry } from "../abstractions";
export declare class WorkflowRegistry implements IWorkflowRegistry {
    getDefinition(id: string, version: number): WorkflowDefinition;
    registerWorkflow<TData>(workflow: WorkflowBase<TData>): void;
}
