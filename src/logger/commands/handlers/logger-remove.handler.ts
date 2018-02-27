import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LoggerRemoveCommand } from "../logger-remove.command";

@CommandHandler(LoggerRemoveCommand)
export class LoggerRemoveHandler implements ICommandHandler<LoggerRemoveCommand> {
    /**
     * @param { LoggerRemoveCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: LoggerRemoveCommand, resolve: (value?) => void) {
        resolve();
    }
}
