import { AddonResolvers } from "../resolvers/addon.resolvers";
import { importClassesFromDirectories } from "../utilities";
import { InjectionMetadata } from "../metadatas";
import { InjectionType } from "@notadd/core/constants/injection.constants";
import { Logger, Module } from "@nestjs/common";
import { OnModuleInitWithInjection } from "@notadd/core/interfaces/on-module-init-with-injection.interface";
import { SettingService } from "@notadd/setting/services/setting.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        AddonResolvers,
    ],
    imports: [
        SettingModule,
    ],
})
export class AddonModule implements OnModuleInitWithInjection {
    private logger: Logger;

    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
        this.logger = new Logger("NotaddAddon", true);
    }

    /**
     * @returns { Promise<Array<InjectionMetadata>> }
     */
    async onModuleInitWithInjection(): Promise<Array<InjectionMetadata>> {
        const settings = await this.settingService.getSettings();

        return importClassesFromDirectories<Function>([ "**/*.injection.js" ])
            .filter(instance => {
                if (instance instanceof Function) {
                    return (<any> instance).identification.length
                        && (<any> instance).module
                        && (<any> instance).type.length
                        && (<any> instance).type == InjectionType.Addon;
                }

                return false;
            }).map(instance => {
                const metadata = new InjectionMetadata();
                metadata.identification = (<any> instance).identification;
                metadata.module = (<any> instance).module;
                metadata.type = (<any> instance).type;

                return metadata;
            });
    }
}
