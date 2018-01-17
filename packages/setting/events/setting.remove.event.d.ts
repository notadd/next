import { IEvent } from "@nestjs/cqrs";
export declare class SettingRemoveEvent implements IEvent {
    private readonly key;
    constructor(key: string);
}
