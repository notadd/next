import "reflect-metadata";
import { Container } from "inversify";
import { IQueueProvider, IWorkflowHost, IPersistenceProvider, IDistributedLockProvider, ILogger } from "./abstractions";
export declare class WorkflowConfig {
    private container;
    constructor(container: Container);
    getContainer(): Container;
    useLogger(service: ILogger): void;
    usePersistence(service: IPersistenceProvider): void;
    useQueueManager(service: IQueueProvider): void;
    useLockManager(service: IDistributedLockProvider): void;
    getHost(): IWorkflowHost;
}
export declare function configureWorkflow(): WorkflowConfig;
