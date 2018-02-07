import { Resolver } from "@nestjs/graphql";
import { ExtensionService } from "../services/extension.service";

@Resolver("Extension")
export class ExtensionResolvers {
    constructor(private readonly extensionService: ExtensionService) {
    }
}
