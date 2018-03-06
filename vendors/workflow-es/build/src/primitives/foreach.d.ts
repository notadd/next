import { ExecutionResult, StepExecutionContext } from "../models";
import { ContainerStepBody } from "./container-step-body";
export declare class Foreach extends ContainerStepBody {
    collection: any[];
    run(context: StepExecutionContext): Promise<ExecutionResult>;
}
