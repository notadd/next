import { SettingService } from "@notadd/setting/services/setting.service";
import { NestContainer } from "@nestjs/core/injector/container";
import { OnModuleInitWithContainer } from "@notadd/core/interfaces/on-module-init-with-container.interface";
export declare class ModuleModule implements OnModuleInitWithContainer {
    private readonly settingService;
    private logger;
    constructor(settingService: SettingService);
    onModuleInitWithContainer(container: NestContainer): Promise<void>;
}
