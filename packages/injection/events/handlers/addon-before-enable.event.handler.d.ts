import { AddonBeforeEnableEvent } from "../";
import { IEventHandler } from "@nestjs/cqrs";
export declare class AddonBeforeEnableEventHandler implements IEventHandler<AddonBeforeEnableEvent> {
    handle(event: AddonBeforeEnableEvent): any;
}
