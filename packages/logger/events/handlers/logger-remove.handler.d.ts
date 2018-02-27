import { IEventHandler } from "@nestjs/cqrs";
import { LoggerRemoveEvent } from "../logger-move.event";
export declare class LoggerRemoveHandler implements IEventHandler<LoggerRemoveEvent> {
    handle(event: LoggerRemoveEvent): void;
}
