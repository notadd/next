import { Module } from "@nestjs/common";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
import { ModuleResolvers } from "../resolvers/module.resolvers";
import { ModuleService } from "../services/module.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        ModuleResolvers,
        ModuleService,
    ],
    imports: [
        SettingModule,
    ],
})
export class ModuleModule implements OnModuleInitWithInjection {
}
