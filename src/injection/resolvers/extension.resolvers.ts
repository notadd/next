import { Extension } from "../types/extension.type";
import { ExtensionService } from "../services/extension.service";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Result } from "@notadd/core/types/result.type";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

@Resolver("Extension")
export class ExtensionResolvers {
    constructor(private readonly extensionService: ExtensionService) {
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Extension | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableExtension(context, args: { identification: string }): Promise<Result | undefined> {
        return await this.extensionService.disableExtension(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Extension | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableExtension(context, args: { identification: string }): Promise<Result | undefined> {
        return await this.extensionService.enableExtension(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Extension | undefined> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getExtension(context, args: { identification: string }): Promise<Extension | undefined> {
        return await this.extensionService.getExtension(args.identification);
    }

    /**
     * @param context
     * @param { {filters: any} } args
     *
     * @returns { Promise<Array<Extension>> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getExtensions(context, args: { filters: any }): Promise<Array<Extension>> {
        return await this.extensionService.getExtensions(args.filters);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Extension | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installExtension(context, args: { identification: string }): Promise<Result | undefined> {
        return await this.extensionService.installExtension(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Extension | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallExtension(context, args: { identification: string }): Promise<Result | undefined> {
        return await this.extensionService.uninstallExtension(args.identification);
    }
}
