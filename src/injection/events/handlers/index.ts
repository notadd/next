import { AddonAfterEnableEventHandler } from "./addon-after-enable.event.handler";
import { AddonAfterInstallEventHandler } from "./addon-after-install.event.handler";
import { AddonAfterUninstallEventHandler } from "./addon-after-uninstall.event.handler";
import { AddonBeforeEnableEventHandler } from "./addon-before-enable.event.handler";
import { AddonBeforeInstallEventHandler } from "./addon-before-install.event.handler";
import { AddonBeforeUninstallEventHandler } from "./addon-before-uninstall.event.handler";
import { ExtensionBeforeInstallEventHandler } from "./extension-before-install.event.handler";
import { ExtensionBeforeUninstallEventHandler } from "./extension-before-uninstall.event.handler";
import { ExtensionAfterInstallEventHandler } from "./extension-after-install.event.handler";
import { ExtensionAfterUninstallEventHandler } from "./extension-after-uninstall.event.handler";
import { ModuleBeforeEnableEventHandler } from "./module-before-enable.event.handler";
import { ModuleBeforeInstallEventHandler } from "./module-before-install.event.handler";
import { ModuleBeforeUninstallEventHandler } from "./module-before-uninstall.event.handler";
import { ModuleAfterEnableEventHandler } from "./module-after-enable.event.handler";
import { ModuleAfterInstallEventHandler } from "./module-after-install.event.handler";
import { ModuleAfterUninstallEventHandler } from "./module-after-uninstall.event.handler";

export const EventHandlers = [
    AddonAfterEnableEventHandler,
    AddonAfterInstallEventHandler,
    AddonAfterUninstallEventHandler,
    AddonBeforeEnableEventHandler,
    AddonBeforeInstallEventHandler,
    AddonBeforeUninstallEventHandler,
    // ExtensionAfterInstallEventHandler,
    // ExtensionAfterUninstallEventHandler,
    // ExtensionBeforeInstallEventHandler,
    // ExtensionBeforeUninstallEventHandler,
    // ModuleAfterEnableEventHandler,
    // ModuleAfterInstallEventHandler,
    // ModuleAfterUninstallEventHandler,
    // ModuleBeforeEnableEventHandler,
    // ModuleBeforeInstallEventHandler,
    // ModuleBeforeUninstallEventHandler,
];
