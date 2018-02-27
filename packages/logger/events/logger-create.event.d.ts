import { IEvent } from "@nestjs/cqrs";
export declare class LoggerCreateEvent implements IEvent {
    readonly content: string;
    constructor(content: string);
}
