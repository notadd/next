import { StepBody, InlineStepBody } from "../abstractions";
import { WorkflowDefinition, WorkflowStepBase, WorkflowStep, StepOutcome, StepExecutionContext, ExecutionResult } from "../models";
import { SubscriptionStepBody, Foreach, While, If } from "../primitives";
export declare class WorkflowBuilder<TData> {
    private steps;
    errorBehavior: number;
    retryInterval: number;
    build(id: string, version: number): WorkflowDefinition;
    addStep(step: WorkflowStepBase): void;
    startWith<TNewStepBody extends StepBody>(body: {
        new (): TNewStepBody;
    }, setup?: (step: StepBuilder<TNewStepBody, TData>) => void): StepBuilder<TNewStepBody, TData>;
    getUpstreamSteps(id: number): Array<WorkflowStepBase>;
}
export declare class StepBuilder<TStepBody extends StepBody, TData> {
    private workflowBuilder;
    step: WorkflowStep<TStepBody>;
    constructor(workflowBuilder: WorkflowBuilder<TData>, step: WorkflowStep<TStepBody>);
    name(name: string): StepBuilder<TStepBody, TData>;
    then<TNewStepBody extends StepBody>(body: {
        new (): TNewStepBody;
    }, setup?: (step: StepBuilder<TNewStepBody, TData>) => void): StepBuilder<TNewStepBody, TData>;
    thenStep<TNewStepBody extends StepBody>(newStep: StepBuilder<TNewStepBody, TData>): StepBuilder<TNewStepBody, TData>;
    thenRun(step: (context: StepExecutionContext) => Promise<ExecutionResult>): StepBuilder<InlineStepBody, TData>;
    when(outcomeValue: (data: TData) => any): OutcomeBuilder<TData>;
    input(expression: (step: TStepBody, data: TData) => void): StepBuilder<TStepBody, TData>;
    output(expression: (step: TStepBody, data: TData) => void): StepBuilder<TStepBody, TData>;
    waitFor(eventName: string, eventKey: (data: TData) => any, effectiveDate?: (data: TData) => Date): StepBuilder<SubscriptionStepBody, TData>;
    end<TNewStepBody extends StepBody>(stepName: string): StepBuilder<TNewStepBody, TData>;
    onError(behavior: number, retryInterval?: number): StepBuilder<TStepBody, TData>;
    private iterateParents(id, name);
    foreach(expression: (data: TData) => any[]): StepBuilder<Foreach, TData>;
    while(expression: (data: TData) => boolean): StepBuilder<While, TData>;
    if(expression: (data: TData) => boolean): StepBuilder<If, TData>;
    do(builder: (then: WorkflowBuilder<TData>) => void): StepBuilder<TStepBody, TData>;
}
export declare class OutcomeBuilder<TData> {
    private workflowBuilder;
    private outcome;
    constructor(workflowBuilder: WorkflowBuilder<TData>, outcome: StepOutcome);
    then<TNewStepBody extends StepBody>(body: {
        new (): TNewStepBody;
    }, setup?: (step: StepBuilder<TNewStepBody, TData>) => void): StepBuilder<TNewStepBody, TData>;
    thenStep<TNewStepBody extends StepBody>(newStep: StepBuilder<TNewStepBody, TData>): StepBuilder<TNewStepBody, TData>;
    thenRun(step: (context: StepExecutionContext) => Promise<ExecutionResult>): StepBuilder<InlineStepBody, TData>;
}
