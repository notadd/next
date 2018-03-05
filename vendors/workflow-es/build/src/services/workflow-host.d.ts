import { WorkflowBase, IWorkflowHost } from "../abstractions";
export declare class WorkflowHost implements IWorkflowHost {
    private registry;
    private workers;
    private persistence;
    private lockProvider;
    private queueProvider;
    private logger;
    start(): Promise<void>;
    stop(): void;
    startWorkflow(id: string, version: number, data?: any): Promise<string>;
    registerWorkflow<TData>(workflow: new () => WorkflowBase<TData>): void;
    publishEvent(eventName: string, eventKey: string, eventData: any, eventTime: Date): Promise<void>;
    suspendWorkflow(id: string): Promise<boolean>;
    resumeWorkflow(id: string): Promise<boolean>;
    terminateWorkflow(id: string): Promise<boolean>;
    private registerCleanCallbacks();
}
