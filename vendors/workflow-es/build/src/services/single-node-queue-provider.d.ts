import { IQueueProvider } from "../abstractions";
export declare class SingleNodeQueueProvider implements IQueueProvider {
    queueForProcessing(id: string, queue: any): Promise<void>;
    dequeueForProcessing(queue: any): Promise<string>;
}
