import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Setting } from "../entities";
import { SettingService } from "../services";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication";
import { Result } from "@notadd/core/interfaces";

@Resolver("Setting")
export class SettingResolvers {
    constructor(private readonly service: SettingService) {
    }

    @Query()
    @UseGuards(UserGuard)
    async getSettings(): Promise<Array<Setting>> {
        return this.service.getSettings();
    }

    @Query()
    @UseGuards(UserGuard)
    async getSettingByKey(object, args: { key: string }): Promise<Setting | undefined> {
        return this.service.getSettingByKey(args.key);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async removeSetting(obj, args: { key: string }): Promise<Result | undefined> {
        await this.service.removeSetting(args.key);

        return {
            code: 200,
            message: "Remove setting successfully!",
        };
    }

    @Mutation()
    @UseGuards(UserGuard)
    async setSetting(obj, args: { key: string, value: string }): Promise<Result> {
        await this.service.setSetting(args.key, args.value);

        return {
            code: 200,
            message: "Set setting successfully!",
        };
    }
}
