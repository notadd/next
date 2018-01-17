import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RemoveLoggerCommand } from "../remove.logger.command";

@CommandHandler(RemoveLoggerCommand)
export class RemoveLoggerHandler implements ICommandHandler<RemoveLoggerCommand> {
    /**
     * @param { RemoveLoggerCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: RemoveLoggerCommand, resolve: (value?) => void) {
        resolve();
    }
}
