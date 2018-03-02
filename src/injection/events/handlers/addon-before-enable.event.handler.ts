import { AddonBeforeEnableEvent } from "../";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AddonBeforeEnableEvent)
export class AddonBeforeEnableEventHandler implements IEventHandler<AddonBeforeEnableEvent> {
    handle(event: AddonBeforeEnableEvent): any {
        return undefined;
    }
}
