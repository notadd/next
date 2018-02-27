import { IEventHandler } from "@nestjs/cqrs";
import { ExtensionBeforeUninstallEvent } from "../";
export declare class ExtensionBeforeUninstallEventHandler implements IEventHandler<ExtensionBeforeUninstallEvent> {
    handle(event: ExtensionBeforeUninstallEvent): any;
}
