import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ModuleBeforeInstallEvent } from "../";

@EventsHandler(ModuleBeforeInstallEvent)
export class ModuleBeforeInstallEventHandler implements IEventHandler<ModuleBeforeInstallEvent> {
    handle(event: ModuleBeforeInstallEvent): any {
        return undefined;
    }
}
