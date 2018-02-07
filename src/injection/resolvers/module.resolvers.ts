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
     * @returns { Module }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async disableModule(identification: string): Module {
        return await this.moduleService.disableModule(identification);
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async enableModule(identification: string): Module {
        return await this.moduleService.enableModule(identification);
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getModule(identification: string): Module {
        return await this.moduleService.getModule(identification);
    }

    /**
     * @param { Object } filter
     * @returns { Module }
     */
    @Query()
    @UseGuards(UserGuard)
    public async getModules(filter: object): Module {
        return await this.moduleService.getModules(filter);
    }

    /**
     * @param { string } identification
     * @returns { Module }enableModule
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async installModule(identification: string): Module {
        return await this.moduleService.installModule(identification);
    }

    /**
     * @param { string } identification
     * @returns { Module }
     */
    @Mutation()
    @UseGuards(UserGuard)
    public async uninstallModule(identification: string): Module {
        return await this.moduleService.uninstallModule(identification);
    }
}
