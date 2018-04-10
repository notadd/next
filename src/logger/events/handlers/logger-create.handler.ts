import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { LoggerCreateEvent } from "../logger-create.event";

@EventsHandler(LoggerCreateEvent)
export class LoggerCreateHandler implements IEventHandler<LoggerCreateEvent> {
    /**
     * @param { LoggerCreateEvent } event
     */
    handle(event: LoggerCreateEvent) {
        console.log(event);
    }
}
