import { IEventHandler } from "@nestjs/cqrs";
import { AddonAfterInstallEvent } from "../";
export declare class AddonAfterInstallEventHandler implements IEventHandler<AddonAfterInstallEvent> {
    handle(event: AddonAfterInstallEvent): any;
}
