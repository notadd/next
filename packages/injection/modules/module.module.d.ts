import { InjectionMetadata } from "../metadatas/injection.metadata";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class ModuleModule implements OnModuleInitWithInjection {
    private readonly settingService;
    private logger;
    constructor(settingService: SettingService);
    onModuleInitWithInjection(): Promise<Array<InjectionMetadata>>;
}
