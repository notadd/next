import { AddonAfterEnableEvent } from "../";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AddonAfterEnableEvent)
export class AddonAfterEnableEventHandler implements IEventHandler<AddonAfterEnableEvent> {
    handle(event: AddonAfterEnableEvent): any {
        return undefined;
    }
}
