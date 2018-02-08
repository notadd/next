import { Extension } from "../types/extension.type";
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
     *
     * @returns { Promise<Extension> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableExtension(identification: string): Promise<Extension> {
        return await this.extensionService.disableExtension(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableExtension(identification: string): Promise<Extension> {
        return await this.extensionService.enableExtension(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension | undefined> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getExtension(identification: string): Promise<Extension | undefined> {
        return await this.extensionService.getExtension(identification);
    }

    /**
     * @param { Object } filter
     *
     * @returns { Promise<Array<Extension>> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getExtensions(filter: object): Promise<Array<Extension>> {
        return await this.extensionService.getExtensions(filter);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installExtension(identification: string): Promise<Extension> {
        return await this.extensionService.installExtension(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Extension> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallExtension(identification: string): Promise<Extension> {
        return await this.extensionService.uninstallExtension(identification);
    }
}
