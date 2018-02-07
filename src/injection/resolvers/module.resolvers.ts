import { Resolver } from "@nestjs/graphql";
import { ModuleService } from "../services/module.service";

@Resolver("Module")
export class ModuleResolvers {
    constructor(private readonly moduleService: ModuleService) {
    }
}
