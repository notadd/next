import { ExtensionResolvers } from "../resolvers";
import { ExtensionService } from "../services";
import { forwardRef, Module } from "@nestjs/common";
import { InjectionModule } from "./injection.module";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    exports: [
        ExtensionService,
    ],
    imports: [
        forwardRef(() => InjectionModule),
        SettingModule,
    ],
    providers: [
        ExtensionResolvers,
        ExtensionService,
    ],
})
export class ExtensionModule {
}
