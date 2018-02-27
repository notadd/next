import { IEvent } from "@nestjs/cqrs";
export declare class SettingUpdateEvent implements IEvent {
    private readonly key;
    private readonly value;
    constructor(key: string, value: string);
}
