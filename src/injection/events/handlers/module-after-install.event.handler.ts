import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ModuleAfterInstallEvent } from "../";

@EventsHandler(ModuleAfterInstallEvent)
export class ModuleAfterInstallEventHandler implements IEventHandler<ModuleAfterInstallEvent> {
    handle(event: ModuleAfterInstallEvent): any {
        return undefined;
    }
}
