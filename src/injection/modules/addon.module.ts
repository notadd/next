import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";

import { AddonResolvers } from "../resolvers";
import { AddonService } from "../services";

@Module({
    exports: [
        AddonService,
    ],
    imports: [
        SettingModule,
    ],
    providers: [
        AddonResolvers,
        AddonService,
    ],
})
export class AddonModule {
}
