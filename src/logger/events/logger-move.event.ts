import { IEvent } from "@nestjs/cqrs";

export class LoggerRemoveEvent implements IEvent {
    /**
     * @param { number } id
     */
    constructor(
        public readonly id: number,
    ) {
    }
}
