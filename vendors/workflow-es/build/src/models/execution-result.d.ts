export declare class ExecutionResult {
    proceed: boolean;
    outcomeValue: any;
    persistenceData: any;
    sleep: Date;
    branchValues: any[];
    static outcome(value: any): Promise<ExecutionResult>;
    static next(): Promise<ExecutionResult>;
    static persist(persistenceData: any): Promise<ExecutionResult>;
    static sleep(until: Date, persistenceData: any): Promise<ExecutionResult>;
    static branch(branches: any[], persistenceData: any): Promise<ExecutionResult>;
}
