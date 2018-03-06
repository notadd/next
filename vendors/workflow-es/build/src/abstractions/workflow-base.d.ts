import { WorkflowBuilder } from "../services";
export declare abstract class WorkflowBase<TData> {
    abstract id: string;
    abstract version: number;
    abstract build(builder: WorkflowBuilder<TData>): any;
}
