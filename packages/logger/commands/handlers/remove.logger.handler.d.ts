import { ICommandHandler } from "@nestjs/cqrs";
import { RemoveLoggerCommand } from "../remove.logger.command";
export declare class RemoveLoggerHandler implements ICommandHandler<RemoveLoggerCommand> {
    execute(command: RemoveLoggerCommand, resolve: (value?) => void): Promise<void>;
}
