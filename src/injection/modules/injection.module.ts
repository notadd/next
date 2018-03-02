import { AddonModule } from "./addon.module";
import { AddonSagas, ExtensionSagas, ModuleSagas } from "../sagas";
import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { CommandHandlers } from "../commands/handlers";
import { ConfigurationPage } from "../pages";
import { DashboardModule } from "./dashboard.module";
import { DeveloperDashboard } from "../dashboards";
import { EventHandlers } from "../events/handlers";
import { ExtensionModule } from "./extension.module";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionService } from "../services";
import { ModuleModule } from "./module.module";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { PageModule } from "./page.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { UserModule } from "@notadd/user/modules/user.module";
import { ModuleRef } from "@nestjs/core";

@Module({
    components: [
        ...CommandHandlers,
        ...EventHandlers,
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
        this.command$.register(CommandHandlers);
        this.command$.setModuleRef(this.moduleRef);
        this.event$.register(EventHandlers);
        this.event$.setModuleRef(this.moduleRef);
        this.event$.combineSagas([
        ]);
    }
}
