import { IEventHandler } from "@nestjs/cqrs";
import { SettingRemoveEvent } from "../setting-remove.event";
export declare class SettingRemoveHandler implements IEventHandler<SettingRemoveEvent> {
    handle(event: SettingRemoveEvent): void;
}
