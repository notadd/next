import { IEventHandler } from "@nestjs/cqrs";
import { ExtensionBeforeInstallEvent } from "../";
export declare class ExtensionBeforeInstallEventHandler implements IEventHandler<ExtensionBeforeInstallEvent> {
    handle(event: ExtensionBeforeInstallEvent): any;
}
