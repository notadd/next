import { ExecutionResult, StepExecutionContext } from "../models";
import { ContainerStepBody } from "./container-step-body";
export declare class While extends ContainerStepBody {
    condition: boolean;
    run(context: StepExecutionContext): Promise<ExecutionResult>;
}
