import { OnModuleInit } from "@nestjs/common";
import { UserService } from "@notadd/user/services/user.service";
import { DashboardService } from "../services/dashboard.service";
import { DashboardExplorerService } from "../services/dashboard-explorer.service";
export declare class InjectionModule implements OnModuleInit {
    private readonly dashboardExplorerService;
    private readonly dashboardService;
    private readonly userService;
    private logger;
    constructor(dashboardExplorerService: DashboardExplorerService, dashboardService: DashboardService, userService: UserService);
    onModuleInit(): Promise<void>;
}
