import { UpdateSettingHandler } from "./update.setting.handler";
import { RemoveSettingHandler } from "./remove.setting.handler";

/**
 * @type { [RemoveSettingHandler , UpdateSettingHandler] }
 */
export const CommandHandlers = [
    RemoveSettingHandler,
    UpdateSettingHandler,
];
