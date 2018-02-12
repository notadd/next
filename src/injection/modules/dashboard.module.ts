import { Module } from "@nestjs/common";
import { DashboardService } from "../services/dashboard.service";
import { DashboardResolvers } from "../resolvers/dashboard.resolvers";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { DashboardExplorerService } from "../services/dashboard-explorer.service";

@Module({
    components: [
        DashboardExplorerService,
        DashboardResolvers,
        DashboardService,
    ],
})
export class DashboardModule implements OnModuleInit {
    /**
     * @param { DashboardService } dashboardService
     */
    constructor(private readonly dashboardService: DashboardService) {
    }

    onModuleInit(): void {
        this.dashboardService.initialize(this.dashboardExplorerService.explore());
    }
}
