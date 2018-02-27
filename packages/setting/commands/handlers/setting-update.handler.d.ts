import { ICommandHandler } from "@nestjs/cqrs";
import { SettingUpdateCommand } from "../setting-update.command";
export declare class SettingUpdateHandler implements ICommandHandler<SettingUpdateCommand> {
    execute(command: SettingUpdateCommand, resolve: (value?) => void): Promise<void>;
}
