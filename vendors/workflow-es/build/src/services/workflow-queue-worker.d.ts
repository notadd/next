import { IBackgroundWorker } from "../abstractions";
export declare class WorkflowQueueWorker implements IBackgroundWorker {
    private executor;
    private persistence;
    private lockProvider;
    private queueProvider;
    private logger;
    private processTimer;
    start(): void;
    stop(): void;
    private processQueue(self);
    private processWorkflow(self, workflowId);
    private subscribeEvent(self, subscription);
}
