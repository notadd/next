import { AddonResolvers } from "../resolvers/addon.resolvers";
import { AddonService } from "../services/addon.service";
import { loadAddonsFromFiles } from "../utilities/load-addons-from-files";
import { forwardRef, Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { InjectionModule } from "./injection.module";

@Module({
    components: [
        AddonResolvers,
        AddonService,
    ],
    imports: [
        ...loadAddonsFromFiles(),
        forwardRef(() => InjectionModule),
        SettingModule,
    ],
})
export class AddonModule {
}
