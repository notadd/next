import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddonAfterUninstallEvent } from "../";

@EventsHandler(AddonAfterUninstallEvent)
export class AddonAfterUninstallEventHandler implements IEventHandler<AddonAfterUninstallEvent> {
    handle(event: AddonAfterUninstallEvent): any {
        return undefined;
    }
}
