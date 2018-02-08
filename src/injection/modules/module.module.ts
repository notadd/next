import { loadModulesFromFiles } from "../utilities/load-modules-from-files";
import { Module } from "@nestjs/common";
import { ModuleResolvers } from "../resolvers/module.resolvers";
import { ModuleService } from "../services/module.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { InjectionService } from "../services/injection.service";

@Module({
    components: [
        InjectionService,
        ModuleResolvers,
        ModuleService,
    ],
    imports: [
        ...loadModulesFromFiles(),
        SettingModule,
    ],
})
export class ModuleModule {
}
