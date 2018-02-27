import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ExtensionAfterInstallEvent } from "../";

@EventsHandler(ExtensionAfterInstallEvent)
export class ExtensionAfterInstallEventHandler implements IEventHandler<ExtensionAfterInstallEvent> {
    handle(event: ExtensionAfterInstallEvent): any {
        return undefined;
    }
}
