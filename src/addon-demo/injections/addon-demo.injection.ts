import { Addon } from "@notadd/injection/decorators/addon.decorator";
import { SettingModule } from "@notadd/setting/modules";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { SettingService } from "@notadd/setting/services";

@Addon({
    authors: [
        {
            email: "admin@notadd.com",
            username: "notadd",
        },
    ],
    identification: "addon-demo",
    name: "Addon Demo",
    version: "v1.0.0",
    imports: [
        SettingModule,
    ],
})
export class AddonDemoInjection implements OnModuleInit {
    constructor(private readonly settingService: SettingService) {
    }

    public async onModuleInit() {
        const settings = await this.settingService.getSettings();
        console.log(settings);
    }
}
