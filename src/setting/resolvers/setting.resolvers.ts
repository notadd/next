import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Setting } from "../entities";
import { SettingService } from "../services";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication";

@Resolver("Setting")
export class SettingResolvers {
    constructor(private readonly service: SettingService) {
    }

    @Query()
    @UseGuards(UserGuard)
    async getSettings(): Promise<Setting[]> {
        return await this.service.getSettings();
    }

    @Query()
    @UseGuards(UserGuard)
    async getSettingByKey(object, args: { key: string }): Promise<Setting | undefined> {
        return await this.service.getSettingByKey(args.key);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async removeSetting(obj, args: { key: string }): Promise<Setting | undefined> {
        return await this.service.removeSetting(args.key);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async setSetting(obj, args: { key: string, value: string }): Promise<Setting> {
        return await this.service.setSetting(args.key, args.value);
    }
}
