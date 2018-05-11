import { Addon } from "../interfaces";
import { AddonService } from "../services";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";
import { Result } from "@notadd/core/interfaces";

@Resolver("Addon")
export class AddonResolvers {
    constructor(private readonly addonService: AddonService) {
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Result | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableAddon(context, args: { identification: string }): Promise<Result | undefined> {
        return this.addonService.disableAddon(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableAddon(context, args: { identification: string }): Promise<Result | undefined> {
        return this.addonService.enableAddon(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getAddon(context, args: { identification: string }): Promise<Addon | undefined> {
        return this.addonService.getAddon(args.identification);
    }

    /**
     * @param context
     * @param { {filters: any} } args
     *
     * @returns { Promise<Array<Addon>> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getAddons(context, args: { filters: any }): Promise<Array<Addon>> {
        return this.addonService.getAddons(args.filters);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installAddon(context, args: { identification: string }): Promise<Result | undefined> {
        return this.addonService.installAddon(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Addon | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallAddon(context, args: { identification: string }): Promise<Result | undefined> {
        return this.addonService.uninstallAddon(args.identification);
    }
}
