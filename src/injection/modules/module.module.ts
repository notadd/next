import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Logger, Module } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
import { importClassesFromDirectories } from "../utilities/import.classes.from.directories";

@Module({
    imports: [
        SettingModule,
    ],
})
export class ModuleModule implements OnModuleInitWithInjection {
    private logger: Logger;

    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
        this.logger = new Logger("NotaddModule", true);
    }

    /**
     * @returns { Promise<Array<Function>> }
     */
    async onModuleInitWithInjection(): Promise<Array<Function>> {
        const settings = await this.settingService.getSettings();

        return importClassesFromDirectories<Function>([ "**/*.injection.js" ])
            .filter(injection => {
                if (injection instanceof Function) {
                    return (<any> injection).identification.length
                        && (<any> injection).module
                        && (<any> injection).type.length
                        && (<any> injection).type == InjectionType.Extension;
                }

                return false;
            });
    }
}
