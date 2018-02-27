import { IEventHandler } from "@nestjs/cqrs";
import { ModuleAfterEnableEvent } from "../";
export declare class ModuleAfterEnableEventHandler implements IEventHandler<ModuleAfterEnableEvent> {
    handle(event: ModuleAfterEnableEvent): any;
}
