import { ExtensionResolvers } from "../resolvers/extension.resolvers";
import { ExtensionService } from "../services/extension.service";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionModule } from "./injection.module";
import { loadExtensionsFromFiles } from "../utilities/load-extensions-from-files";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { InjectionService } from "../services/injection.service";

@Module({
    components: [
        ExtensionResolvers,
        ExtensionService,
        InjectionService,
    ],
    imports: [
        ...loadExtensionsFromFiles(),
        SettingModule,
    ],
})
export class ExtensionModule {
}
