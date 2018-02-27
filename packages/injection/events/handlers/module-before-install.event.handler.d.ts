import { IEventHandler } from "@nestjs/cqrs";
import { ModuleBeforeInstallEvent } from "../";
export declare class ModuleBeforeInstallEventHandler implements IEventHandler<ModuleBeforeInstallEvent> {
    handle(event: ModuleBeforeInstallEvent): any;
}
