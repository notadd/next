import { ICommandHandler } from "@nestjs/cqrs";
import { UpdateSettingCommand } from "../update.setting.command";
export declare class UpdateSettingHandler implements ICommandHandler<UpdateSettingCommand> {
    execute(command: UpdateSettingCommand, resolve: (value?) => void): Promise<void>;
}
