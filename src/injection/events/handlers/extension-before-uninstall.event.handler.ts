import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ExtensionBeforeUninstallEvent } from "../";

@EventsHandler(ExtensionBeforeUninstallEvent)
export class ExtensionBeforeUninstallEventHandler implements IEventHandler<ExtensionBeforeUninstallEvent> {
    handle(event: ExtensionBeforeUninstallEvent): any {
        return undefined;
    }
}
