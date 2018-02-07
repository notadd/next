import { Extension } from "@notadd/core/injectors/extension.injector";
import { ExtensionService } from "../services/extension.service";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

@Resolver("Extension")
export class ExtensionResolvers {
    constructor(private readonly extensionService: ExtensionService) {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableExtension(identification: string): Extension {
        return await this.extensionService.disableExtension(identification);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableExtension(identification: string): Extension {
        return await this.extensionService.enableExtension(identification);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getExtension(identification: string): Extension {
        return await this.extensionService.getExtension(identification);
    }

    /**
     * @param { Object } filter
     * @returns { Extension }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getExtensions(filter: object): Extension {
        return await this.extensionService.getExtensions(filter);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installExtension(identification: string): Extension {
        return await this.extensionService.installExtension(identification);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallExtension(identification: string): Extension {
        return await this.extensionService.uninstallExtension(identification);
    }
}
