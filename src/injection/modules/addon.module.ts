import { Logger, Module } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { NestContainer } from "@nestjs/core/injector/container";
import { OnModuleInitWithContainer } from "@notadd/core/interfaces/on-module-init-with-container.interface";

@Module({
    imports: [
        SettingModule,
    ],
})
export class AddonModule {
    private logger: Logger;

    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
        this.logger = new Logger("NotaddAddon", true);
    }

    /**
     * @param { NestContainer } container
     *
     * @returns { Promise<void> }
     */
    async onModuleInitWithContainer(container: NestContainer): Promise<void> {
        const settings = await this.settingService.getSettings();
        console.log(settings);
        this.logger.log("Addons loaded");
    }
}
