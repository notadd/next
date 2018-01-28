import { IEventHandler } from "@nestjs/cqrs";
import { LoggerRemoveEvent } from "../logger.remove.event";
export declare class LoggerRemoveHandler implements IEventHandler<LoggerRemoveEvent> {
    handle(event: LoggerRemoveEvent): void;
}
