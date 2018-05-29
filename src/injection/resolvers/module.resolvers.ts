import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Result } from "@notadd/core/interfaces";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

import { Module } from "../interfaces/module.interface";
import { ModuleService } from "../services/module.service";

@Resolver("Module")
export class ModuleResolvers {
    constructor(private readonly moduleService: ModuleService) {
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Module | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableModule(context, args: { identification: string }): Promise<Result | undefined> {
        return this.moduleService.disableModule(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Module | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableModule(context, args: { identification: string }): Promise<Result | undefined> {
        return this.moduleService.enableModule(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Module | undefined> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getModule(context, args: { identification: string }): Promise<Module | undefined> {
        return this.moduleService.getModule(args.identification);
    }

    /**
     * @param context
     * @param { {filters: any} } args
     *
     * @returns { Promise<Array<Module>> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getModules(context, args: { filters: any }): Promise<Array<Module>> {
        return this.moduleService.getModules(args.filters);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Module | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installModule(context, args: { identification: string }): Promise<Result | undefined> {
        return this.moduleService.installModule(args.identification);
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns { Promise<Module | undefined> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallModule(context, args: { identification: string }): Promise<Result | undefined> {
        return this.moduleService.uninstallModule(args.identification);
    }
}
