import { ICommandHandler } from "@nestjs/cqrs";
import { RemoveSettingCommand } from "../remove.setting.command";
export declare class RemoveSettingHandler implements ICommandHandler<RemoveSettingCommand> {
    execute(command: RemoveSettingCommand, resolve: (value?) => void): Promise<void>;
}
