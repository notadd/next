import { AddonResolvers } from "../resolvers/addon.resolvers";
import { AddonService } from "../services/addon.service";
import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        AddonResolvers,
        AddonService,
    ],
    imports: [
        SettingModule,
    ],
})
export class AddonModule {
}
