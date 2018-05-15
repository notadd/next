import { AddonResolvers } from "../resolvers";
import { AddonService } from "../services";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionModule } from "./injection.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    exports: [
        AddonService,
    ],
    imports: [
        forwardRef(() => InjectionModule),
        SettingModule,
    ],
    providers: [
        AddonResolvers,
        AddonService,
    ],
})
export class AddonModule {
}
