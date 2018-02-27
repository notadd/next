import { IEvent } from "@nestjs/cqrs";

export class SettingRemoveEvent implements IEvent {
    /**
     * @param {string} key
     */
    constructor(
        private readonly key: string,
    ) {
    }
}
