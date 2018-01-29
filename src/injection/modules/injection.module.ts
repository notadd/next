import { Logger, MiddlewaresConsumer, Module } from "@nestjs/common";
import { ExtensionModule } from "./extension. module";
import { AddonModule } from "./addon.module";
import { ModuleModule } from "./module.module";

@Module({
    imports: [
        ExtensionModule,
        ModuleModule,
        AddonModule,
    ],
})
export class InjectionModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger("NotaddInjection", true);
    }

    configure(consumer: MiddlewaresConsumer) {
        this.logger.log('Begin to load injection.');
    }
}
