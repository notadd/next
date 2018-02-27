import { IEventHandler } from "@nestjs/cqrs";
import { LoggerCreateEvent } from "../logger-create.event";
export declare class LoggerCreateHandler implements IEventHandler<LoggerCreateEvent> {
    handle(event: LoggerCreateEvent): void;
}
