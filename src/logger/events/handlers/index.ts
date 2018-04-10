import { LoggerCreateHandler } from "./logger-create.handler";
import { LoggerListHandler } from "./logger-list.handler";
import { LoggerRemoveHandler } from "./logger-remove.handler";

export const eventHandlers = [
    LoggerCreateHandler,
    LoggerListHandler,
    LoggerRemoveHandler,
];
