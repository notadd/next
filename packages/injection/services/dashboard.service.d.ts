import { SettingService } from "@notadd/setting/services/setting.service";
import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
import { Dashboard } from "../types/dashboard.type";
export declare class DashboardService {
    private readonly settingService;
    private initialized;
    private dashboards;
    constructor(settingService: SettingService);
    getDashboard(name: string): Dashboard;
    getDashboards(): Array<Dashboard>;
    initialize(metadatas: Array<DashboardMetadata>): void;
}
