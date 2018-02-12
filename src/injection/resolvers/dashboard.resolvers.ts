import { Query, Resolver } from "@nestjs/graphql";
import { DashboardService } from "../services/dashboard.service";
import { Dashboard } from "../types/dashboard.type";

@Resolver("Dashboard")
export class DashboardResolvers {
    constructor(private readonly dashboardService: DashboardService) {
    }

    /**
     * @param { string } name
     * @returns { Dashboard }
     */
    @Query()
    public getDashboard(name: string): Dashboard {
        return this.dashboardService.getDashboard(name);
    }

    /**
     * @returns { Array<Dashboard> }
     */
    @Query()
    public getDashboards(): Array<Dashboard> {
        return this.dashboardService.getDashboards();
    }
}
