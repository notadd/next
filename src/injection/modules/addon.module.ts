import { AddonResolvers } from "../resolvers";
import { AddonService } from "../services";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionModule } from "./injection.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { TestModule } from "./test.module";

@Module({
    components: [
        AddonResolvers,
        AddonService,
    ],
    imports: [
        forwardRef(() => InjectionModule),
        SettingModule,
        TestModule,
    ],
})
export class AddonModule {
}
