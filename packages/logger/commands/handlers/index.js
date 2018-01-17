"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_logger_handler_1 = require("./create.logger.handler");
const list_logger_handler_1 = require("./list.logger.handler");
const remove_logger_handler_1 = require("./remove.logger.handler");
exports.CommandHandlers = [
    create_logger_handler_1.CreateLoggerHandler,
    list_logger_handler_1.ListLoggerHandler,
    remove_logger_handler_1.RemoveLoggerHandler,
];
