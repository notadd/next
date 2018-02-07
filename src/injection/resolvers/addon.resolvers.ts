import { Resolver } from "@nestjs/graphql";
import { AddonService } from "../services/addon.service";

@Resolver("Addon")
export class AddonResolvers {
    constructor(private readonly addonService: AddonService) {
    }
}
