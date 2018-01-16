import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveSettingCommand } from "../remove.setting.command";

@CommandHandler(RemoveSettingCommand)
export class RemoveSettingHandler implements ICommandHandler<RemoveSettingCommand> {
    async execute(command: RemoveSettingCommand, resolve: (value?) => void) {
        resolve();
    }
}
