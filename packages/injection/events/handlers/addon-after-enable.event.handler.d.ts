import { AddonAfterEnableEvent } from "../";
import { IEventHandler } from "@nestjs/cqrs";
export declare class AddonAfterEnableEventHandler implements IEventHandler<AddonAfterEnableEvent> {
    handle(event: AddonAfterEnableEvent): any;
}
