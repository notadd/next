"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon_before_enable_event_handler_1 = require("./addon-before-enable.event.handler");
const addon_before_uninstall_event_handler_1 = require("./addon-before-uninstall.event.handler");
const addon_before_install_event_handler_1 = require("./addon-before-install.event.handler");
const extension_before_uninstall_event_handler_1 = require("./extension-before-uninstall.event.handler");
const extension_before_install_event_handler_1 = require("./extension-before-install.event.handler");
const addon_after_uninstall_event_handler_1 = require("./addon-after-uninstall.event.handler");
const addon_after_install_event_handler_1 = require("./addon-after-install.event.handler");
const addon_after_enable_event_handler_1 = require("./addon-after-enable.event.handler");
const extension_after_uninstall_event_handler_1 = require("./extension-after-uninstall.event.handler");
const extension_after_install_event_handler_1 = require("./extension-after-install.event.handler");
const module_before_uninstall_event_handler_1 = require("./module-before-uninstall.event.handler");
const module_before_install_event_handler_1 = require("./module-before-install.event.handler");
const module_before_enable_event_handler_1 = require("./module-before-enable.event.handler");
const module_after_uninstall_event_handler_1 = require("./module-after-uninstall.event.handler");
const module_after_install_event_handler_1 = require("./module-after-install.event.handler");
const module_after_enable_event_handler_1 = require("./module-after-enable.event.handler");
exports.EventHandlers = [
    addon_after_enable_event_handler_1.AddonAfterEnableEventHandler,
    addon_after_install_event_handler_1.AddonAfterInstallEventHandler,
    addon_after_uninstall_event_handler_1.AddonAfterUninstallEventHandler,
    addon_before_enable_event_handler_1.AddonBeforeEnableEventHandler,
    addon_before_install_event_handler_1.AddonBeforeInstallEventHandler,
    addon_before_uninstall_event_handler_1.AddonBeforeUninstallEventHandler,
    extension_after_install_event_handler_1.ExtensionAfterInstallEventHandler,
    extension_after_uninstall_event_handler_1.ExtensionAfterUninstallEventHandler,
    extension_before_install_event_handler_1.ExtensionBeforeInstallEventHandler,
    extension_before_uninstall_event_handler_1.ExtensionBeforeUninstallEventHandler,
    module_after_enable_event_handler_1.ModuleAfterEnableEventHandler,
    module_after_install_event_handler_1.ModuleAfterInstallEventHandler,
    module_after_uninstall_event_handler_1.ModuleAfterUninstallEventHandler,
    module_before_enable_event_handler_1.ModuleBeforeEnableEventHandler,
    module_before_install_event_handler_1.ModuleBeforeInstallEventHandler,
    module_before_uninstall_event_handler_1.ModuleBeforeUninstallEventHandler,
];
