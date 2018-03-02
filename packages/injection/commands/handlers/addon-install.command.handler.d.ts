import { AddonInstallCommand } from "../";
import { ICommandHandler } from "@nestjs/cqrs";
export declare class AddonInstallCommandHandler implements ICommandHandler<AddonInstallCommand> {
    execute(command: AddonInstallCommand, resolve: (value?) => void): any;
}
