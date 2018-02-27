import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddonBeforeInstallEvent } from "../";

@EventsHandler(AddonBeforeInstallEvent)
export class AddonBeforeInstallEventHandler implements IEventHandler<AddonBeforeInstallEvent> {
    handle(event: AddonBeforeInstallEvent): any {
        return undefined;
    }
}
