import { AddonBeforeUninstallEvent } from "../";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AddonBeforeUninstallEvent)
export class AddonBeforeUninstallEventHandler implements IEventHandler<AddonBeforeUninstallEvent> {
    handle(event: AddonBeforeUninstallEvent): any {
        return undefined;
    }
}
