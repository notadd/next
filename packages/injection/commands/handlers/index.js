"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon_enable_command_handler_1 = require("./addon-enable.command.handler");
const addon_install_command_handler_1 = require("./addon-install.command.handler");
const addon_uninstall_command_handler_1 = require("./addon-uninstall.command.handler");
const extension_uninstall_command_handler_1 = require("./extension-uninstall.command.handler");
const extension_install_command_handler_1 = require("./extension-install.command.handler");
const module_uninstall_command_handler_1 = require("./module-uninstall.command.handler");
const module_enable_command_handler_1 = require("./module-enable.command.handler");
const module_install_command_handler_1 = require("./module-install.command.handler");
exports.CommandHandlers = [
    addon_enable_command_handler_1.AddonEnableCommandHandler,
    addon_install_command_handler_1.AddonInstallCommandHandler,
    addon_uninstall_command_handler_1.AddonUninstallCommandHandler,
    extension_install_command_handler_1.ExtensionInstallCommandHandler,
    extension_uninstall_command_handler_1.ExtensionUninstallCommandHandler,
    module_enable_command_handler_1.ModuleEnableCommandHandler,
    module_install_command_handler_1.ModuleInstallCommandHandler,
    module_uninstall_command_handler_1.ModuleUninstallCommandHandler,
];
