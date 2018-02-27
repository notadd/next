import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SettingRemoveEvent } from "../setting-remove.event";

@EventsHandler(SettingRemoveEvent)
export class SettingRemoveHandler implements IEventHandler<SettingRemoveEvent> {
    /**
     * @param { SettingRemoveEvent } event
     */
    handle(event: SettingRemoveEvent) {
    }
}
