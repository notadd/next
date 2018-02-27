import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ExtensionBeforeInstallEvent } from "../";

@EventsHandler(ExtensionBeforeInstallEvent)
export class ExtensionBeforeInstallEventHandler implements IEventHandler<ExtensionBeforeInstallEvent> {
    handle(event: ExtensionBeforeInstallEvent): any {
        return undefined;
    }
}
