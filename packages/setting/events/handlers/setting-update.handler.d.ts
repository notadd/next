import { IEventHandler } from "@nestjs/cqrs";
import { SettingUpdateEvent } from "../setting-update.event";
export declare class SettingUpdateHandler implements IEventHandler<SettingUpdateEvent> {
    handle(event: SettingUpdateEvent): void;
}
