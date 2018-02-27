import { ICommandHandler } from "@nestjs/cqrs";
import { LoggerRemoveCommand } from "../logger-remove.command";
export declare class LoggerRemoveHandler implements ICommandHandler<LoggerRemoveCommand> {
    execute(command: LoggerRemoveCommand, resolve: (value?) => void): Promise<void>;
}
