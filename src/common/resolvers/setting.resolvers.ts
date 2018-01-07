import { Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../../user/services/user.service";
import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";

@Resolver('Setting')
export class SettingResolvers {
    constructor(private readonly settingService: SettingService) {}

    @Query()
    async getSettings(): Promise<Setting[]> {
        return await this.settingService.findAll();
    }
}
