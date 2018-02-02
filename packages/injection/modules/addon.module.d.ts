import { SettingService } from "@notadd/setting/services/setting.service";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
import { InjectionMetadata } from "../metadatas/injection.metadata";
export declare class AddonModule implements OnModuleInitWithInjection {
    private readonly settingService;
    private logger;
    constructor(settingService: SettingService);
    onModuleInitWithInjection(): Promise<Array<InjectionMetadata>>;
}
