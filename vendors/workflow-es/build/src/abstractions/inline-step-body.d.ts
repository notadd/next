import { StepBody } from "./step-body";
import { ExecutionResult, StepExecutionContext } from "../models";
export declare class InlineStepBody extends StepBody {
    private func;
    constructor(func: (context: StepExecutionContext) => Promise<ExecutionResult>);
    run(context: StepExecutionContext): Promise<ExecutionResult>;
}
