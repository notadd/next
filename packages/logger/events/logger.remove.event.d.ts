import { IEvent } from "@nestjs/cqrs";
export declare class LoggerRemoveEvent implements IEvent {
    readonly id: number;
    constructor(id: number);
}
