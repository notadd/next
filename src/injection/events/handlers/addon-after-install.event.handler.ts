import { AddonAfterInstallEvent } from "../";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(AddonAfterInstallEvent)
export class AddonAfterInstallEventHandler implements IEventHandler<AddonAfterInstallEvent> {
    handle(event: AddonAfterInstallEvent): any {
        return undefined;
    }
}
