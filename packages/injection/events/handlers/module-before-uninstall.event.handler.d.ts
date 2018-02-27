import { IEventHandler } from "@nestjs/cqrs";
import { ModuleBeforeUninstallEvent } from "../";
export declare class ModuleBeforeUninstallEventHandler implements IEventHandler<ModuleBeforeUninstallEvent> {
    handle(event: ModuleBeforeUninstallEvent): any;
}
