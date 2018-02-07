import { ExtensionResolvers } from "../resolvers/extension.resolvers";
import { ExtensionService } from "../services/extension.service";
import { Module } from "@nestjs/common";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        ExtensionResolvers,
        ExtensionService,
    ],
    imports: [
        SettingModule,
    ],
})
export class ExtensionModule implements OnModuleInitWithInjection {
}
