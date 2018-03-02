import { AddonBeforeInstallEvent } from "../";
import { IEventHandler } from "@nestjs/cqrs";
export declare class AddonBeforeInstallEventHandler implements IEventHandler<AddonBeforeInstallEvent> {
    handle(event: AddonBeforeInstallEvent): any;
}
