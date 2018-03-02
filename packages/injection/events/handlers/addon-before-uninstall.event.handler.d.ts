import { AddonBeforeUninstallEvent } from "../";
import { IEventHandler } from "@nestjs/cqrs";
export declare class AddonBeforeUninstallEventHandler implements IEventHandler<AddonBeforeUninstallEvent> {
    handle(event: AddonBeforeUninstallEvent): any;
}
