import { Dashboard } from "../types";
import { DashboardService } from "../services";
export declare class DashboardResolvers {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(context: any, args: {
        name: string;
    }): Dashboard | undefined;
    getDashboards(): Array<Dashboard>;
}
