import { ICommandHandler } from "@nestjs/cqrs";
import { SettingRemoveCommand } from "../setting-remove.command";
export declare class SettingRemoveHandler implements ICommandHandler<SettingRemoveCommand> {
    execute(command: SettingRemoveCommand, resolve: (value?) => void): Promise<void>;
}
