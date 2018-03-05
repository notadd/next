import { ExecutionResult, StepExecutionContext } from "../models";
export declare abstract class StepBody {
    abstract run(context: StepExecutionContext): Promise<ExecutionResult>;
}
