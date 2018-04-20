export declare class ClusterStarter {
    protected bootstrap: string;
    protected child: any;
    protected pid: number;
    initialize(): void;
    start(): void;
    protected message(message: {
        action: string;
    }): void;
}
export declare const Cluster: ClusterStarter;
