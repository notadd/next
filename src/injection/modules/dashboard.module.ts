import { DashboardService } from "../services/dashboard.service";
import { DashboardResolvers } from "../resolvers/dashboard.resolvers";
import { DashboardExplorerService } from "../services/dashboard-explorer.service";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { Module } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        DashboardExplorerService,
        DashboardResolvers,
        DashboardService,
        MetadataScanner,
    ],
    imports: [
        SettingModule,
    ],
})
export class DashboardModule implements OnModuleInit {
    /**
     * @param { DashboardExplorerService } dashboardExplorerService
     * @param { DashboardService } dashboardService
     */
    constructor(
        private readonly dashboardExplorerService: DashboardExplorerService,
        private readonly dashboardService: DashboardService,
    ) {
    }

    onModuleInit(): void {
        this.dashboardService.initialize(this.dashboardExplorerService.explore());
    }
}
