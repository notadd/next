import { ICommandHandler } from "@nestjs/cqrs";
import { ListLoggerCommand } from "../list.logger.command";
export declare class ListLoggerHandler implements ICommandHandler<ListLoggerCommand> {
    execute(command: ListLoggerCommand, resolve: (value?) => void): Promise<void>;
}
