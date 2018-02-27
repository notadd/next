import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ExtensionAfterUninstallEvent } from "../";

@EventsHandler(ExtensionAfterUninstallEvent)
export class ExtensionAfterUninstallEventHandler implements IEventHandler<ExtensionAfterUninstallEvent> {
    handle(event: ExtensionAfterUninstallEvent): any {
        return undefined;
    }
}
