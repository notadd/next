import { SettingService } from "@notadd/setting/services/setting.service";
import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
export declare class DashboardService {
    private readonly settingService;
    private initialized;
    private dashboards;
    constructor(settingService: SettingService);
    initialize(metadatas: Array<DashboardMetadata>): void;
}
