import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ModuleBeforeUninstallEvent } from "../";

@EventsHandler(ModuleBeforeUninstallEvent)
export class ModuleBeforeUninstallEventHandler implements IEventHandler<ModuleBeforeUninstallEvent> {
    handle(event: ModuleBeforeUninstallEvent): any {
        return undefined;
    }
}
