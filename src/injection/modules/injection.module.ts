import { AddonModule } from "./addon.module";
import { ConfigurationPage } from "../pages";
import { DashboardModule } from "./dashboard.module";
import { DeveloperDashboard } from "../dashboards";
import { ExtensionModule } from "./extension.module";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionService } from "../services";
import { LocalModule } from "@notadd/addon-local/local.module";
import { ModuleModule } from "./module.module";
import { PageModule } from "./page.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { UserModule } from "@notadd/user";
import { loadAddonsFromFiles, loadExtensionsFromFiles, loadModulesFromFiles } from "../utilities";

@Module({
    exports: [
        InjectionService,
    ],
    imports: [
        ...loadExtensionsFromFiles(),
        ...loadModulesFromFiles(),
        ...loadAddonsFromFiles(),
        forwardRef(() => ExtensionModule),
        forwardRef(() => ModuleModule),
        forwardRef(() => AddonModule),
        DashboardModule,
        LocalModule,
        PageModule,
        SettingModule,
        UserModule,
    ],
    providers: [
        ConfigurationPage,
        DeveloperDashboard,
        InjectionService,
    ],
})
export class InjectionModule {
}
