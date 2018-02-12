import { DashboardService } from "../services/dashboard.service";
import { DashboardExplorerService } from "../services/dashboard-explorer.service";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
export declare class DashboardModule implements OnModuleInit {
    private readonly dashboardExplorerService;
    private readonly dashboardService;
    constructor(dashboardExplorerService: DashboardExplorerService, dashboardService: DashboardService);
    onModuleInit(): void;
}
