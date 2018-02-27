import { IEventHandler } from "@nestjs/cqrs";
import { ExtensionAfterUninstallEvent } from "../";
export declare class ExtensionAfterUninstallEventHandler implements IEventHandler<ExtensionAfterUninstallEvent> {
    handle(event: ExtensionAfterUninstallEvent): any;
}
