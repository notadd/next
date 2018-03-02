import { AddonBeforeInstallEvent } from "../";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AddonBeforeInstallEvent)
export class AddonBeforeInstallEventHandler implements IEventHandler<AddonBeforeInstallEvent> {
    handle(event: AddonBeforeInstallEvent): any {
        return undefined;
    }
}
