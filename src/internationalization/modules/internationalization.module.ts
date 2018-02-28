import { Module } from "@nestjs/common";
import { InternationalizationService } from "../services";

@Module({
    components: [
        InternationalizationService,
    ],
})
export class InternationalizationModule {

}
