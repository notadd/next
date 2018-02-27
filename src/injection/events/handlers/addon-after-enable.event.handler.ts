import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddonAfterEnableEvent } from "../";

@EventsHandler(AddonAfterEnableEvent)
export class AddonAfterEnableEventHandler implements IEventHandler<AddonAfterEnableEvent> {
    handle(event: AddonAfterEnableEvent): any {
        return undefined;
    }
}
