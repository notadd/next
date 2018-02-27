import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ModuleInstallCommand } from "../";

@CommandHandler(ModuleInstallCommand)
export class ModuleInstallCommandHandler implements ICommandHandler<ModuleInstallCommand> {
    execute(command: ModuleInstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
