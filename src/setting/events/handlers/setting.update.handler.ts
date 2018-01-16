import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SettingUpdateEvent } from "../setting.update.event";

@EventsHandler(SettingUpdateEvent)
export class SettingUpdateHandler implements IEventHandler<SettingUpdateEvent> {
    handle(event: SettingUpdateEvent) {

    }
}
