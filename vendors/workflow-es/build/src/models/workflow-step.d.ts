import { StepBody } from "../abstractions";
import { StepOutcome } from "./step-outcome";
import { WorkflowExecutorResult } from "./workflow-executor-result";
import { WorkflowDefinition } from "./workflow-definition";
import { WorkflowInstance } from "./workflow-instance";
import { ExecutionPointer } from "./execution-pointer";
import { StepExecutionContext } from "./step-execution-context";
import { ExecutionResult } from "./execution-result";
export declare abstract class WorkflowStepBase {
    id: number;
    name: string;
    abstract body: {
        new (): StepBody;
    };
    outcomes: Array<StepOutcome>;
    children: Array<number>;
    errorBehavior: number;
    retryInterval: number;
    inputs: Array<(step: StepBody, data: any) => void>;
    outputs: Array<(step: StepBody, data: any) => void>;
    initForExecution(executorResult: WorkflowExecutorResult, definition: WorkflowDefinition, workflow: WorkflowInstance, executionPointer: ExecutionPointer): any;
    beforeExecute(executorResult: WorkflowExecutorResult, context: StepExecutionContext, executionPointer: ExecutionPointer, body: StepBody): any;
    afterExecute(executorResult: WorkflowExecutorResult, context: StepExecutionContext, stepResult: ExecutionResult, executionPointer: ExecutionPointer): void;
}
export declare class WorkflowStep<T extends StepBody> extends WorkflowStepBase {
    body: {
        new (): T;
    };
    inputs: Array<(step: StepBody, data: any) => void>;
    outputs: Array<(step: StepBody, data: any) => void>;
}
