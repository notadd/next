import { ExtensionResolvers } from "../resolvers";
import { ExtensionService } from "../services";
import { forwardRef, Module } from "@nestjs/common";
import { loadExtensionsFromFiles } from "../utilities";
import { InjectionModule } from "./injection.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        ExtensionResolvers,
        ExtensionService,
    ],
    imports: [
        ...loadExtensionsFromFiles(),
        forwardRef(() => InjectionModule),
        SettingModule,
    ],
})
export class ExtensionModule {
}
