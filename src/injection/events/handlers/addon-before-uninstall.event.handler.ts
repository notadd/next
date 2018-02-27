import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddonBeforeUninstallEvent } from "../";

@EventsHandler(AddonBeforeUninstallEvent)
export class AddonBeforeUninstallEventHandler implements IEventHandler<AddonBeforeUninstallEvent> {
    handle(event: AddonBeforeUninstallEvent): any {
        return undefined;
    }
}
