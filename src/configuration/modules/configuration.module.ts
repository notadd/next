import { ConfigurationService } from "../services/configuration.service";
import { Module } from "@nestjs/common";

@Module({
    components: [
        ConfigurationService,
    ],
})
export class ConfigurationModule {

}
