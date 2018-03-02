import { forwardRef, Module } from "@nestjs/common";
import { InjectionModule } from "./injection.module";
import { loadModulesFromFiles } from "../utilities";
import { ModuleResolvers } from "../resolvers";
import { ModuleService } from "../services";
import { SettingModule } from "@notadd/setting/modules/setting.module";

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
