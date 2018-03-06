import { WorkflowBase } from "../abstractions";
export interface IWorkflowHost {
    start(): Promise<void>;
    stop(): any;
    startWorkflow(id: string, version: number, data: any): Promise<string>;
    registerWorkflow<TData>(workflow: new () => WorkflowBase<TData>): any;
    publishEvent(eventName: string, eventKey: string, eventData: any, eventTime: Date): Promise<void>;
    suspendWorkflow(id: string): Promise<boolean>;
    resumeWorkflow(id: string): Promise<boolean>;
    terminateWorkflow(id: string): Promise<boolean>;
}
