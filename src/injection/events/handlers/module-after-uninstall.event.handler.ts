import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ModuleAfterUninstallEvent } from "../";

@EventsHandler(ModuleAfterUninstallEvent)
export class ModuleAfterUninstallEventHandler implements IEventHandler<ModuleAfterUninstallEvent> {
    handle(event: ModuleAfterUninstallEvent): any {
        return undefined;
    }
}
