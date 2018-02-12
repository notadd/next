import { DashboardService } from "../services/dashboard.service";
import { Dashboard } from "../types/dashboard.type";
export declare class DashboardResolvers {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(name: string): Dashboard;
    getDashboards(): Array<Dashboard>;
}
