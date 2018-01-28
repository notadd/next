import { IEventHandler } from "@nestjs/cqrs";
import { LoggerListEvent } from "../logger.list.event";
export declare class LoggerListHandler implements IEventHandler<LoggerListEvent> {
    handle(event: LoggerListEvent): void;
}
