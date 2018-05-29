import { forwardRef, Module } from "@nestjs/common";

import { AddonModule } from "./addon.module";
import { DashboardModule } from "./dashboard.module";
import { DeveloperDashboard } from "../dashboards";
import { ExtensionModule } from "./extension.module";
import { ModuleModule } from "./module.module";
import { PageModule } from "./page.module";
import { ConfigurationPage } from "../pages/configuration.page";
import { loadExtensionsFromFiles } from "../utilities/load-extensions-from-files";
import { loadModulesFromFiles } from "../utilities/load-modules-from-files";
import { loadAddonsFromFiles } from "../utilities/load-addons-from-files";

@Module({
    imports: [
        ...loadExtensionsFromFiles(),
        ...loadModulesFromFiles(),
        ...loadAddonsFromFiles(),
        forwardRef(() => ExtensionModule),
        forwardRef(() => ModuleModule),
        forwardRef(() => AddonModule),
        DashboardModule,
        PageModule,
    ],
    providers: [
        ConfigurationPage,
        DeveloperDashboard,
    ],
})
export class InjectionModule {
}
