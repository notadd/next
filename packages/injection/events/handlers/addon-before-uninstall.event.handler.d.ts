import { IEventHandler } from "@nestjs/cqrs";
import { AddonBeforeUninstallEvent } from "../";
export declare class AddonBeforeUninstallEventHandler implements IEventHandler<AddonBeforeUninstallEvent> {
    handle(event: AddonBeforeUninstallEvent): any;
}
