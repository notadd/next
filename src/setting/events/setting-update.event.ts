import { IEvent } from "@nestjs/cqrs";

export class SettingUpdateEvent implements IEvent {
    constructor(
        private readonly key: string,
        private readonly value: string,
    ) {
    }
}
