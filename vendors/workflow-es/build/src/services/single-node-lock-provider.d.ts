import { IDistributedLockProvider } from "../abstractions";
export declare class SingleNodeLockProvider implements IDistributedLockProvider {
    aquireLock(id: string): Promise<boolean>;
    releaseLock(id: string): Promise<void>;
}
