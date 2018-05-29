import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Result } from "@notadd/core/interfaces";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

import { Extension } from "../interfaces/extension.interfaces";
import { ExtensionService } from "../services/extension.service";

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
    @Query()
    @UseGuards(UserGuard)
    public async getExtension(context, args: { identification: string }): Promise<Extension | undefined> {
        return this.extensionService.getExtension(args.identification);
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
        return this.extensionService.getExtensions(args.filters);
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
        return this.extensionService.installExtension(args.identification);
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
        return this.extensionService.uninstallExtension(args.identification);
    }
}
