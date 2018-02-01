import { SettingService } from "@notadd/setting/services/setting.service";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
export declare class AddonModule implements OnModuleInitWithInjection {
    private readonly settingService;
    private logger;
    constructor(settingService: SettingService);
    onModuleInitWithInjection(): Promise<Array<Function>>;
}
