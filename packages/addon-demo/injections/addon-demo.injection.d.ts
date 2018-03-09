import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { SettingService } from "@notadd/setting/services";
export declare class AddonDemoInjection implements OnModuleInit {
    private readonly settingService;
    constructor(settingService: SettingService);
    onModuleInit(): Promise<void>;
}
