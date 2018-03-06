import { ExecutionResult, StepExecutionContext } from "../models";
import { ContainerStepBody } from "./container-step-body";
export declare class If extends ContainerStepBody {
    condition: boolean;
    run(context: StepExecutionContext): Promise<ExecutionResult>;
}
