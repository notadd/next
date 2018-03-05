import { IBackgroundWorker } from "../abstractions";
export declare class EventQueueWorker implements IBackgroundWorker {
    private executor;
    private persistence;
    private lockProvider;
    private queueProvider;
    private logger;
    private processTimer;
    start(): void;
    stop(): void;
    private processQueue(self);
    private processEvent(self, eventId);
    private seedSubscription(self, evt, sub);
}
