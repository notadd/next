import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddonBeforeEnableEvent } from "../";

@EventsHandler(AddonBeforeEnableEvent)
export class AddonBeforeEnableEventHandler implements IEventHandler<AddonBeforeEnableEvent> {
    handle(event: AddonBeforeEnableEvent): any {
        return undefined;
    }
}
