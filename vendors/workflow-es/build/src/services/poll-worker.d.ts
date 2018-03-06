import { IBackgroundWorker } from "../abstractions";
export declare class PollWorker implements IBackgroundWorker {
    private persistence;
    private lockProvider;
    private queueProvider;
    private logger;
    private processTimer;
    start(): void;
    stop(): void;
    private process(self);
}
