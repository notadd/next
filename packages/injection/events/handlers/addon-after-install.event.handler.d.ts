import { AddonAfterInstallEvent } from "../";
import { IEventHandler } from "@nestjs/cqrs";
export declare class AddonAfterInstallEventHandler implements IEventHandler<AddonAfterInstallEvent> {
    handle(event: AddonAfterInstallEvent): any;
}
