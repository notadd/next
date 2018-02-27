import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ModuleUninstallCommand } from "../";

@CommandHandler(ModuleUninstallCommand)
export class ModuleUninstallCommandHandler implements ICommandHandler<ModuleUninstallCommand> {
    execute(command: ModuleUninstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
