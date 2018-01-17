import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveSettingCommand } from "../remove.setting.command";

@CommandHandler(RemoveSettingCommand)
export class RemoveSettingHandler implements ICommandHandler<RemoveSettingCommand> {
    /**
     * @param { RemoveSettingCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: RemoveSettingCommand, resolve: (value?) => void) {
        resolve();
    }
}
