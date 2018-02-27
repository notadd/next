import { IEventHandler } from "@nestjs/cqrs";
import { ExtensionAfterInstallEvent } from "../";
export declare class ExtensionAfterInstallEventHandler implements IEventHandler<ExtensionAfterInstallEvent> {
    handle(event: ExtensionAfterInstallEvent): any;
}
