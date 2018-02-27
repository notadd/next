import { IEventHandler } from "@nestjs/cqrs";
import { AddonBeforeEnableEvent } from "../";
export declare class AddonBeforeEnableEventHandler implements IEventHandler<AddonBeforeEnableEvent> {
    handle(event: AddonBeforeEnableEvent): any;
}
