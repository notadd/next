import { ICommandHandler } from "@nestjs/cqrs";
import { AddonEnableCommand } from "../";
export declare class AddonEnableCommandHandler implements ICommandHandler<AddonEnableCommand> {
    execute(command: AddonEnableCommand, resolve: (value?) => void): any;
}
