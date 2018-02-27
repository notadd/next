import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ModuleBeforeEnableEvent } from "../";

@EventsHandler(ModuleBeforeEnableEvent)
export class ModuleBeforeEnableEventHandler implements IEventHandler<ModuleBeforeEnableEvent> {
    handle(event: ModuleBeforeEnableEvent): any {
        return undefined;
    }
}
