import { SettingService } from "@notadd/setting/services/setting.service";
import { Dashboard } from "../interfaces/dashboard.interface";
import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
export declare class DashboardService {
    private readonly settingService;
    private initialized;
    private dashboards;
    constructor(settingService: SettingService);
    getDashboard(name: string): Dashboard | undefined;
    getDashboards(): Array<Dashboard>;
    initialize(metadatas: Array<DashboardMetadata>): void;
}
