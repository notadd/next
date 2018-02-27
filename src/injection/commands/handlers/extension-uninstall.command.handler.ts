import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ExtensionUninstallCommand } from "../";

@CommandHandler(ExtensionUninstallCommand)
export class ExtensionUninstallCommandHandler implements ICommandHandler<ExtensionUninstallCommand> {
    execute(command: ExtensionUninstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
