import { Dashboard } from "../interfaces/dashboard.interface";
import { DashboardService } from "../services/dashboard.service";
export declare class DashboardResolvers {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(context: any, args: {
        name: string;
    }): Dashboard | undefined;
    getDashboards(): Array<Dashboard>;
}
