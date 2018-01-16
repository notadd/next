import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateSettingCommand } from "../update.setting.command";

@CommandHandler(UpdateSettingCommand)
export class UpdateSettingHandler implements ICommandHandler<UpdateSettingCommand> {
    async execute(command: UpdateSettingCommand, resolve: (value?) => void) {
        resolve();
    }
}
