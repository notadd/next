import { ExecutionPointer } from "../models";
import { StepBody } from "../abstractions";
export declare abstract class ContainerStepBody extends StepBody {
    protected isBranchComplete(pointers: ExecutionPointer[], rootId: string): boolean;
}
