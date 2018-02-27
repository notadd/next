import { IEventHandler } from "@nestjs/cqrs";
import { AddonAfterEnableEvent } from "../";
export declare class AddonAfterEnableEventHandler implements IEventHandler<AddonAfterEnableEvent> {
    handle(event: AddonAfterEnableEvent): any;
}
