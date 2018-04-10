import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LoggerListEvent } from "../logger-list.event";

@EventsHandler(LoggerListEvent)
export class LoggerListHandler implements IEventHandler<LoggerListEvent> {
    /**
     * @param { LoggerListEvent } event
     */
    handle(event: LoggerListEvent) {
        console.log(event);
    }
}
