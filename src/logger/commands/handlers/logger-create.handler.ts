import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { LoggerCreateCommand } from "../logger-create.command";

@CommandHandler(LoggerCreateCommand)
export class LoggerCreateHandler implements ICommandHandler<LoggerCreateCommand> {
    /**
     * @param { LoggerCreateCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: LoggerCreateCommand, resolve: (value?) => void) {
        resolve();
    }
}
