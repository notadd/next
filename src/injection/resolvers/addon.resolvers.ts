import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { AddonService } from "../services/addon.service";
import { Addon } from "../../../packages/core/injectors/addon.injector";

@Resolver("Addon")
export class AddonResolvers {
    constructor(private readonly addonService: AddonService) {
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    @Mutation()
    public async disableAddon(identification: string): Addon {
        return await this.addonService.disableAddon(identification);
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    @Mutation()
    public async enableAddon(identification: string): Addon {
        return await this.addonService.enableAddon(identification);
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    @Query()
    public async getAddon(identification: string): Addon {
        return await this.addonService.getAddon(identification);
    }

    /**
     * @param filter
     * @returns { Array<Addon> }
     */
    @Query()
    public async getAddons(filter): Array<Addon> {
        return await this.addonService.getAddons(filter);
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    @Mutation()
    public async installAddon(identification: string): Addon {
        return await this.addonService.installAddon(identification);
    }

    /**
     * @param { string } identification
     * @returns { Addon }
     */
    @Mutation()
    public async uninstallAddon(identification: string): Addon {
        return await this.addonService.uninstallAddon(identification);
    }
}
