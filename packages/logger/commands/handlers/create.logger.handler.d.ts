import { ICommandHandler } from "@nestjs/cqrs";
import { CreateLoggerCommand } from "../create.logger.command";
export declare class CreateLoggerHandler implements ICommandHandler<CreateLoggerCommand> {
    execute(command: CreateLoggerCommand, resolve: (value?) => void): Promise<void>;
}
