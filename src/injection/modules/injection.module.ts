import { ConfigurationPage } from "../pages/configuration.page";
import { AddonModule } from "./addon.module";
import { DashboardModule } from "./dashboard.module";
import { DeveloperDashboard } from "../dashboards/developer.dashboard";
import { ExtensionModule } from "./extension.module";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionService } from "../services";
import { ModuleModule } from "./module.module";
import { PageModule } from "./page.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { UserModule } from "@notadd/user/modules/user.module";

@Module({
    components: [
        ConfigurationPage,
        DeveloperDashboard,
        InjectionService,
    ],
    exports: [
        InjectionService,
    ],
    imports: [
        forwardRef(() => ExtensionModule),
        forwardRef(() => ModuleModule),
        forwardRef(() => AddonModule),
        DashboardModule,
        PageModule,
        SettingModule,
        UserModule,
    ],
})
export class InjectionModule {
}
