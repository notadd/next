import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";

@Resolver('Setting')
export class SettingResolvers {
    constructor(private readonly service: SettingService) {
    }

    @Query()
    async getSettings(): Promise<Setting[]> {
        return await this.service.getSettings();
    }

    @Query()
    async getSettingByKey(object, args: { key: String }): Promise<Setting | undefined> {
        return await this.service.getSettingByKey(args.key);
    }

    @Mutation()
    async removeSetting(obj, args: { key: String }): Promise<Boolean> {
        return await this.service.removeSetting(args.key);
    }

    @Mutation()
    async setSetting(obj, args: { key: String, value: String }): Promise<Boolean> {
        return await this.service.setSetting(args.key, args.value);
    }
}
