import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { AddonAfterInstallEvent } from "../";

@EventsHandler(AddonAfterInstallEvent)
export class AddonAfterInstallEventHandler implements IEventHandler<AddonAfterInstallEvent> {
    handle(event: AddonAfterInstallEvent): any {
        return undefined;
    }
}
