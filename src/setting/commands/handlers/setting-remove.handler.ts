import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SettingRemoveCommand } from "../setting-remove.command";

@CommandHandler(SettingRemoveCommand)
export class SettingRemoveHandler implements ICommandHandler<SettingRemoveCommand> {
    /**
     * @param { SettingRemoveCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: SettingRemoveCommand, resolve: (value?) => void) {
        resolve();
    }
}
