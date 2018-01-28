import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ListLoggerCommand } from "../list.logger.command";

@CommandHandler(ListLoggerCommand)
export class ListLoggerHandler implements ICommandHandler<ListLoggerCommand> {
    /**
     * @param { ListLoggerCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: ListLoggerCommand, resolve: (value?) => void) {
        resolve();
    }
}
