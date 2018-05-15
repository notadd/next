import { forwardRef, Module } from "@nestjs/common";
import { InjectionModule } from "./injection.module";
import { ModuleResolvers } from "../resolvers";
import { ModuleService } from "../services";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    exports: [
        ModuleService,
    ],
    imports: [
        forwardRef(() => InjectionModule),
        SettingModule,
    ],
    providers: [
        ModuleResolvers,
        ModuleService,
    ],
})
export class ModuleModule {
}
