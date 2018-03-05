import { StepExecutionContext, ExecutionPointer, WorkflowInstance, WorkflowDefinition, WorkflowStep, WorkflowExecutorResult } from "../models";
import { SubscriptionStepBody } from "./subscription-step-body";
import { StepBody } from "../abstractions";
export declare class SubscriptionStep extends WorkflowStep<SubscriptionStepBody> {
    eventKey: (data: any) => any;
    eventName: string;
    effectiveDate: (data: any) => Date;
    initForExecution(executorResult: WorkflowExecutorResult, definition: WorkflowDefinition, workflow: WorkflowInstance, executionPointer: ExecutionPointer): any;
    beforeExecute(executorResult: WorkflowExecutorResult, context: StepExecutionContext, executionPointer: ExecutionPointer, body: StepBody): any;
}
