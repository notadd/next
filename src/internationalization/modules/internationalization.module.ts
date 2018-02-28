import { Module } from "@nestjs/common";
import { InternationalizationResolvers } from "../resolvers/internationalization.resolvers";
import { InternationalizationService } from "../services";

@Module({
    components: [
        InternationalizationResolvers,
        InternationalizationService,
    ],
})
export class InternationalizationModule {

}
