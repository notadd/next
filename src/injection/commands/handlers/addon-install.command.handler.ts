import { AddonInstallCommand } from "../";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(AddonInstallCommand)
export class AddonInstallCommandHandler implements ICommandHandler<AddonInstallCommand> {
    execute(command: AddonInstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
