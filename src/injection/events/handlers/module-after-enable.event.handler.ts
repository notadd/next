import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ModuleAfterEnableEvent } from "../";

@EventsHandler(ModuleAfterEnableEvent)
export class ModuleAfterEnableEventHandler implements IEventHandler<ModuleAfterEnableEvent> {
    handle(event: ModuleAfterEnableEvent): any {
        return undefined;
    }
}
