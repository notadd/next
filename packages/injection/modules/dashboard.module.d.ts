import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { DashboardExplorerService } from "../services/dashboard-explorer.service";
import { DashboardService } from "../services/dashboard.service";
export declare class DashboardModule implements OnModuleInit {
    private readonly dashboardExplorerService;
    private readonly dashboardService;
    constructor(dashboardExplorerService: DashboardExplorerService, dashboardService: DashboardService);
    onModuleInit(): void;
}
