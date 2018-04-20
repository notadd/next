export declare class Cluster {
    protected bootstrap: string;
    protected pid: number;
    initialize(): void;
    start(): void;
    protected message(message: any): void;
}
