import { Dashboard } from "../interfaces";
import { DashboardMetadata } from "../interfaces";
import { SettingService } from "@notadd/setting/services/setting.service";
export declare class DashboardService {
    private readonly settingService;
    private initialized;
    private dashboards;
    constructor(settingService: SettingService);
    getDashboard(name: string): Dashboard | undefined;
    getDashboards(): Array<Dashboard>;
    initialize(metadatas: Array<DashboardMetadata>): void;
}
