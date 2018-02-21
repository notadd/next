import { SettingService } from "@notadd/setting/services/setting.service";
export declare class WorkflowExplorerService {
    private readonly settingService;
    constructor(settingService: SettingService);
    explore(): void;
}
