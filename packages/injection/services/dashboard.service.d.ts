import { SettingService } from "@notadd/setting/services/setting.service";
import { Dashboard, DashboardMetadata } from "../interfaces";
export declare class DashboardService {
    private readonly settingService;
    private initialized;
    private dashboards;
    constructor(settingService: SettingService);
    getDashboard(name: string): Dashboard | undefined;
    getDashboards(): Array<Dashboard>;
    initialize(metadatas: Array<DashboardMetadata>): void;
}
