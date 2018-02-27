import { ICommandHandler } from "@nestjs/cqrs";
import { LoggerCreateCommand } from "../logger-create.command";
export declare class LoggerCreateHandler implements ICommandHandler<LoggerCreateCommand> {
    execute(command: LoggerCreateCommand, resolve: (value?) => void): Promise<void>;
}
