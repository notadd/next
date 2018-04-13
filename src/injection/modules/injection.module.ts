import { AddonModule } from "./addon.module";
import { AddonSagas, ExtensionSagas, ModuleSagas } from "../sagas";
import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { commandHandlers } from "../commands/handlers";
import { ConfigurationPage } from "../pages";
import { DashboardModule } from "./dashboard.module";
import { DeveloperDashboard } from "../dashboards";
import { eventHandlers } from "../events/handlers";
import { ExtensionModule } from "./extension.module";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionService } from "../services";
import { ModuleModule } from "./module.module";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { PageModule } from "./page.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { UserModule } from "@notadd/user";
import { ModuleRef } from "@nestjs/core";
import { loadAddonsFromFiles, loadExtensionsFromFiles, loadModulesFromFiles } from "../utilities";

@Module({
    components: [
        ...commandHandlers,
        ...eventHandlers,
        AddonSagas,
        ConfigurationPage,
        DeveloperDashboard,
        ExtensionSagas,
        InjectionService,
        ModuleSagas,
    ],
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
        CQRSModule,
        DashboardModule,
        PageModule,
        SettingModule,
        UserModule,
    ],
})
export class InjectionModule implements OnModuleInit {
    constructor(
        private readonly addonSagas: AddonSagas,
        private readonly command$: CommandBus,
        private readonly event$: EventBus,
        private readonly extensionSagas: ExtensionSagas,
        private readonly moduleRef: ModuleRef,
        private readonly moduleSagas: ModuleSagas,
    ) {
    }

    onModuleInit() {
        this.command$.setModuleRef(this.moduleRef);
        this.event$.setModuleRef(this.moduleRef);
        this.event$.register(eventHandlers);
        this.command$.register(commandHandlers);
        this.event$.combineSagas([
        ]);
    }
}
