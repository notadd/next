import { loadModulesFromFiles } from "../utilities/load-modules-from-files";
import { forwardRef, Module } from "@nestjs/common";
import { ModuleResolvers } from "../resolvers/module.resolvers";
import { ModuleService } from "../services/module.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { InjectionModule } from "./injection.module";

@Module({
    components: [
        ModuleResolvers,
        ModuleService,
    ],
    imports: [
        ...loadModulesFromFiles(),
        forwardRef(() => InjectionModule),
        SettingModule,
    ],
})
export class ModuleModule {
}
