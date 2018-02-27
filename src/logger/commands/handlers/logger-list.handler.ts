import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LoggerListCommand } from "../logger-list.command";

@CommandHandler(LoggerListCommand)
export class LoggerListHandler implements ICommandHandler<LoggerListCommand> {
    /**
     * @param { LoggerListCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: LoggerListCommand, resolve: (value?) => void) {
        resolve();
    }
}
