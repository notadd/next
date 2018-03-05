export declare var QueueType: {
    Workflow: number;
    Event: number;
};
export interface IQueueProvider {
    queueForProcessing(id: string, queue: any): Promise<void>;
    dequeueForProcessing(queue: any): Promise<string>;
}
