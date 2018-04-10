import { SettingUpdateHandler } from "./setting-update.handler";
import { SettingRemoveHandler } from "./setting-remove.handler";

/**
 * @type { [SettingRemoveHandler , SettingUpdateHandler] }
 */
export const commandHandlers = [
    SettingRemoveHandler,
    SettingUpdateHandler,
];
