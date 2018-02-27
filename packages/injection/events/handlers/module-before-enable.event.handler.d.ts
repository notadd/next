import { IEventHandler } from "@nestjs/cqrs";
import { ModuleBeforeEnableEvent } from "../";
export declare class ModuleBeforeEnableEventHandler implements IEventHandler<ModuleBeforeEnableEvent> {
    handle(event: ModuleBeforeEnableEvent): any;
}
