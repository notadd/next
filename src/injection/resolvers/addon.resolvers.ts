import { Addon } from "../types/addon.type";
import { AddonService } from "../services/addon.service";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Result } from "@notadd/core/types/result.type";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

@Resolver("Addon")
export class AddonResolvers {
    constructor(private readonly addonService: AddonService) {
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableAddon(identification: string): Promise<Result | undefined> {
        return await this.addonService.disableAddon(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableAddon(identification: string): Promise<Result | undefined> {
        return await this.addonService.enableAddon(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getAddon(identification: string): Promise<Addon | undefined> {
        return await this.addonService.getAddon(identification);
    }

    /**
     * @param filter
     *
     * @returns { Promise<Array<Addon>> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getAddons(filter): Promise<Array<Addon>> {
        return await this.addonService.getAddons(filter);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installAddon(identification: string): Promise<Result | undefined> {
        return await this.addonService.installAddon(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallAddon(identification: string): Promise<Result | undefined> {
        return await this.addonService.uninstallAddon(identification);
    }
}
