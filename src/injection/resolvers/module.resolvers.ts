import { ModuleService } from "../services/module.service";
import { Module } from "../../../packages/core/injectors/module.injector";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

@Resolver("Module")
export class ModuleResolvers {
    constructor(private readonly moduleService: ModuleService) {
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableModule(identification: string): Promise<Module> {
        return await this.moduleService.disableModule(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Module }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableModule(identification: string): Promise<Module> {
        return await this.moduleService.enableModule(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module | undefined> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getModule(identification: string): Promise<Module | undefined> {
        return await this.moduleService.getModule(identification);
    }

    /**
     * @param { Object } filter
     *
     * @returns { Promise<Array<Module>> }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getModules(filter: object): Promise<Array<Module>> {
        return await this.moduleService.getModules(filter);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installModule(identification: string): Promise<Module> {
        return await this.moduleService.installModule(identification);
    }

    /**
     * @param { string } identification
     *
     * @returns { Promise<Module> }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallModule(identification: string): Promise<Module> {
        return await this.moduleService.uninstallModule(identification);
    }
}
