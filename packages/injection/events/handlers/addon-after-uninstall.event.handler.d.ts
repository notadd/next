import { AddonAfterUninstallEvent } from "../";
import { IEventHandler } from "@nestjs/cqrs";
export declare class AddonAfterUninstallEventHandler implements IEventHandler<AddonAfterUninstallEvent> {
    handle(event: AddonAfterUninstallEvent): any;
}
