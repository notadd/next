import { AddonAfterUninstallEvent } from "../";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AddonAfterUninstallEvent)
export class AddonAfterUninstallEventHandler implements IEventHandler<AddonAfterUninstallEvent> {
    handle(event: AddonAfterUninstallEvent): any {
        return undefined;
    }
}
