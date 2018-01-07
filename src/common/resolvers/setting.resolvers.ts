import { Query, Resolver } from "@nestjs/graphql";
import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";

@Resolver('Setting')
export class SettingResolvers {
    constructor(private readonly settingService: SettingService) {}

    @Query()
    async getSettings(): Promise<Setting[]> {
        return await this.settingService.findAll();
    }

    @Query()
    async getSettingByKey(object, args): Promise<Setting | undefined> {
        return await this.settingService.getSettingByKey(args.key);
    }
}
