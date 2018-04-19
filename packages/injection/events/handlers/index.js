"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon_after_enable_event_handler_1 = require("./addon-after-enable.event.handler");
const addon_after_install_event_handler_1 = require("./addon-after-install.event.handler");
const addon_after_uninstall_event_handler_1 = require("./addon-after-uninstall.event.handler");
const addon_before_enable_event_handler_1 = require("./addon-before-enable.event.handler");
const addon_before_install_event_handler_1 = require("./addon-before-install.event.handler");
const addon_before_uninstall_event_handler_1 = require("./addon-before-uninstall.event.handler");
exports.eventHandlers = [
    addon_after_enable_event_handler_1.AddonAfterEnableEventHandler,
    addon_after_install_event_handler_1.AddonAfterInstallEventHandler,
    addon_after_uninstall_event_handler_1.AddonAfterUninstallEventHandler,
    addon_before_enable_event_handler_1.AddonBeforeEnableEventHandler,
    addon_before_install_event_handler_1.AddonBeforeInstallEventHandler,
    addon_before_uninstall_event_handler_1.AddonBeforeUninstallEventHandler,
];

//# sourceMappingURL=index.js.map
