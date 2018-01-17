import { CreateLoggerHandler } from "./create.logger.handler";
import { ListLoggerHandler } from "./list.logger.handler";
import { RemoveLoggerHandler } from "./remove.logger.handler";

export const CommandHandlers = [
    CreateLoggerHandler,
    ListLoggerHandler,
    RemoveLoggerHandler,
];
