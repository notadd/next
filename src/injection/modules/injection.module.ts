import { ConfigurationPage } from "../pages";
import { AddonModule } from "./addon.module";
import { DashboardModule } from "./dashboard.module";
import { DeveloperDashboard } from "../dashboards";
import { ExtensionModule } from "./extension.module";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionService } from "../services";
import { ModuleModule } from "./module.module";
import { PageModule } from "./page.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { UserModule } from "@notadd/user/modules/user.module";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { ModuleRef } from "@nestjs/core";
import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { EventHandlers } from "../events/handlers";
import { CommandHandlers } from "../commands/handlers";
import { AddonSagas } from "../sagas/addon.sagas";
import { ExtensionSagas } from "../sagas/extension.sagas";
import { ModuleSagas } from "../sagas/module.sagas";

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
