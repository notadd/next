import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateLoggerCommand } from "../create.logger.command";

@CommandHandler(CreateLoggerCommand)
export class CreateLoggerHandler implements ICommandHandler<CreateLoggerCommand> {
    /**
     * @param { CreateLoggerCommand } command
     * @param { (value?) => void } resolve
     *
     * @returns { Promise<void> }
     */
    async execute(command: CreateLoggerCommand, resolve: (value?) => void) {
        resolve();
    }
}
