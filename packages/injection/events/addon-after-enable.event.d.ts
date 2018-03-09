import { IEvent } from "@nestjs/cqrs";
export declare class AddonAfterEnableEvent implements IEvent {
    readonly identification: string;
    constructor(identification: string);
}
