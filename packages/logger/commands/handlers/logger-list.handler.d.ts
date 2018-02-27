import { ICommandHandler } from "@nestjs/cqrs";
import { LoggerListCommand } from "../logger-list.command";
export declare class LoggerListHandler implements ICommandHandler<LoggerListCommand> {
    execute(command: LoggerListCommand, resolve: (value?) => void): Promise<void>;
}
