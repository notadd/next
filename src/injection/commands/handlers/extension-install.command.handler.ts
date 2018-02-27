import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ExtensionInstallCommand } from "../";

@CommandHandler(ExtensionInstallCommand)
export class ExtensionInstallCommandHandler implements ICommandHandler<ExtensionInstallCommand> {
    execute(command: ExtensionInstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
