import { IEventHandler } from "@nestjs/cqrs";
import { ModuleAfterInstallEvent } from "../";
export declare class ModuleAfterInstallEventHandler implements IEventHandler<ModuleAfterInstallEvent> {
    handle(event: ModuleAfterInstallEvent): any;
}
