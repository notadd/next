import { AddonEnableCommand } from "../";
import { ICommandHandler } from "@nestjs/cqrs";
export declare class AddonEnableCommandHandler implements ICommandHandler<AddonEnableCommand> {
    execute(command: AddonEnableCommand, resolve: (value?) => void): any;
}
