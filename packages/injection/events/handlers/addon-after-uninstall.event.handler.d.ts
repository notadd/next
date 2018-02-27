import { IEventHandler } from "@nestjs/cqrs";
import { AddonAfterUninstallEvent } from "../";
export declare class AddonAfterUninstallEventHandler implements IEventHandler<AddonAfterUninstallEvent> {
    handle(event: AddonAfterUninstallEvent): any;
}
