"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_create_handler_1 = require("./logger.create.handler");
const logger_list_handler_1 = require("./logger.list.handler");
exports.EventHandlers = [
    logger_create_handler_1.LoggerCreateHandler,
    logger_list_handler_1.LoggerListHandler,
];
