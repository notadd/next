import { IEvent } from "@nestjs/cqrs";

export class LoggerCreateEvent implements IEvent {
    /**
     * @param { string } content
     */
    constructor(
        public readonly content: string,
    ) {
    }
}
