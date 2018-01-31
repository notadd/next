import { SettingService } from "@notadd/setting/services/setting.service";
import { NestContainer } from "@nestjs/core/injector/container";
export declare class AddonModule {
    private readonly settingService;
    private logger;
    constructor(settingService: SettingService);
    onModuleInitWithContainer(container: NestContainer): Promise<void>;
}
