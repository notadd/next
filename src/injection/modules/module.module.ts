import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";

import { ModuleService } from "../services/module.service";
import { ModuleResolvers } from "../resolvers/module.resolvers";

@Module({
    exports: [
        ModuleService,
    ],
    imports: [
        SettingModule,
    ],
    providers: [
        ModuleResolvers,
        ModuleService,
    ],
})
export class ModuleModule {
}
