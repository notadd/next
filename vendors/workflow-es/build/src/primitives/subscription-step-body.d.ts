import { ExecutionResult, StepExecutionContext } from "../models";
import { StepBody } from "../abstractions";
export declare class SubscriptionStepBody extends StepBody {
    eventData: any;
    run(context: StepExecutionContext): Promise<ExecutionResult>;
}
