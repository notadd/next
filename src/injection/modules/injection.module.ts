import { Module } from "@nestjs/common";
import { ExtensionModule } from "./extension. module";
import { AddonModule } from "./addon.module";
import { ModuleModule } from "./module.module";

@Module({
    imports: [
        AddonModule,
        ExtensionModule,
        ModuleModule,
    ],
})
export class InjectionModule {
}
