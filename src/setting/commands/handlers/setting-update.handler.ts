import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SettingUpdateCommand } from "../setting-update.command";

@CommandHandler(SettingUpdateCommand)
export class SettingUpdateHandler implements ICommandHandler<SettingUpdateCommand> {
    /**
     * @param { SettingUpdateCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: SettingUpdateCommand, resolve: (value?) => void) {
        resolve();
    }
}
