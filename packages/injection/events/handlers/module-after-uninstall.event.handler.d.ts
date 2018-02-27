import { IEventHandler } from "@nestjs/cqrs";
import { ModuleAfterUninstallEvent } from "../";
export declare class ModuleAfterUninstallEventHandler implements IEventHandler<ModuleAfterUninstallEvent> {
    handle(event: ModuleAfterUninstallEvent): any;
}
