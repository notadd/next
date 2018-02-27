import { ICommandHandler } from "@nestjs/cqrs";
import { AddonInstallCommand } from "../";
export declare class AddonInstallCommandHandler implements ICommandHandler<AddonInstallCommand> {
    execute(command: AddonInstallCommand, resolve: (value?) => void): any;
}
