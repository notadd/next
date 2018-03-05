export declare class ExecutionPointer {
    id: string;
    stepId: number;
    active: boolean;
    sleepUntil: number;
    persistenceData: any;
    startTime: Date;
    endTime: Date;
    eventName: string;
    eventKey: any;
    eventPublished: boolean;
    eventData: any;
    outcome: any;
    stepName: string;
    retryCount: number;
    children: string[];
    contextItem: any;
    predecessorId: string;
}
