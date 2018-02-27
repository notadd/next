import { IEventHandler } from "@nestjs/cqrs";
import { AddonBeforeInstallEvent } from "../";
export declare class AddonBeforeInstallEventHandler implements IEventHandler<AddonBeforeInstallEvent> {
    handle(event: AddonBeforeInstallEvent): any;
}
