import { AddonEnableCommandHandler } from "./addon-enable.command.handler";
import { AddonInstallCommandHandler } from "./addon-install.command.handler";
import { AddonUninstallCommandHandler } from "./addon-uninstall.command.handler";
import { ExtensionUninstallCommandHandler } from "./extension-uninstall.command.handler";
import { ExtensionInstallCommandHandler } from "./extension-install.command.handler";
import { ModuleUninstallCommandHandler } from "./module-uninstall.command.handler";
import { ModuleEnableCommandHandler } from "./module-enable.command.handler";
import { ModuleInstallCommandHandler } from "./module-install.command.handler";

export const CommandHandlers = [
    AddonEnableCommandHandler,
    AddonInstallCommandHandler,
    AddonUninstallCommandHandler,
    ExtensionInstallCommandHandler,
    ExtensionUninstallCommandHandler,
    ModuleEnableCommandHandler,
    ModuleInstallCommandHandler,
    ModuleUninstallCommandHandler,
];
