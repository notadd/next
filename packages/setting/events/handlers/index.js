"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setting_update_handler_1 = require("./setting.update.handler");
const setting_remove_handler_1 = require("./setting.remove.handler");
exports.EventHandlers = [
    setting_remove_handler_1.SettingRemoveHandler,
    setting_update_handler_1.SettingUpdateHandler,
];
