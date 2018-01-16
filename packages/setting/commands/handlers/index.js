"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update_setting_handler_1 = require("./update.setting.handler");
const remove_setting_handler_1 = require("./remove.setting.handler");
exports.CommandHandlers = [
    remove_setting_handler_1.RemoveSettingHandler,
    update_setting_handler_1.UpdateSettingHandler,
];
