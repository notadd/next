import { AddonResolvers } from "../resolvers";
import { AddonService } from "../services";
import { forwardRef, Module } from "@nestjs/common";
import { loadAddonsFromFiles } from "../utilities";
import { InjectionModule } from "./injection.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";

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
