import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LoggerRemoveEvent } from "../logger-move.event";

@EventsHandler(LoggerRemoveEvent)
export class LoggerRemoveHandler implements IEventHandler<LoggerRemoveEvent> {
    /**
     * @param { LoggerRemoveEvent } event
     */
    handle(event: LoggerRemoveEvent) {
    }
}
