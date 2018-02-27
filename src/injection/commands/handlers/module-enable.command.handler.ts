import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ModuleEnableCommand } from "../";

@CommandHandler(ModuleEnableCommand)
export class ModuleEnableCommandHandler implements ICommandHandler<ModuleEnableCommand> {
    execute(command: ModuleEnableCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
