import { ExtensionResolvers } from "../resolvers/extension.resolvers";
import { ExtensionService } from "../services/extension.service";
import { loadExtensionsFromFiles } from "../utilities/load-extensions-from-files";
import { forwardRef, Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { InjectionModule } from "./injection.module";

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
