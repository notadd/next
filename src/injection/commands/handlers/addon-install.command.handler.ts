import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddonInstallCommand } from "../";

@CommandHandler(AddonInstallCommand)
export class AddonInstallCommandHandler implements ICommandHandler<AddonInstallCommand> {
    execute(command: AddonInstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
