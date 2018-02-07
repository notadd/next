import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { ExtensionService } from "../services/extension.service";
import { Extension } from "../../../packages/core/injectors/extension.injector";

@Resolver("Extension")
export class ExtensionResolvers {
    constructor(private readonly extensionService: ExtensionService) {
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    public async disableExtension(identification: string): Extension {
        return await this.extensionService.disableExtension(identification);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    public async enableExtension(identification: string): Extension {
        return await this.extensionService.enableExtension(identification);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Query()
    public async getExtension(identification: string): Extension {
        return await this.extensionService.getExtension(identification);
    }

    /**
     * @param { Object } filter
     * @returns { Extension }
     */
    @Query()
    public async getExtensions(filter: object): Extension {
        return await this.extensionService.getExtensions(filter);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    public async installExtension(identification: string): Extension {
        return await this.extensionService.installExtension(identification);
    }

    /**
     * @param { string } identification
     * @returns { Extension }
     */
    @Mutation()
    public async uninstallExtension(identification: string): Extension {
        return await this.extensionService.uninstallExtension(identification);
    }
}
