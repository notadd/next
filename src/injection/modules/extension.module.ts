import { ExtensionResolvers } from "../resolvers/extension.resolvers";
import { ExtensionService } from "../services/extension.service";
import { loadExtensionsFromFiles } from "../utilities/load-extensions-from-files";
import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        ExtensionResolvers,
        ExtensionService,
    ],
    imports: [
        ...loadExtensionsFromFiles(),
        SettingModule,
    ],
})
export class ExtensionModule {
}
