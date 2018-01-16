import { Module } from "@nestjs/common";
import { ConfigurationService } from "../services/configuration.service";

@Module({
    components: [
        ConfigurationService,
    ],
})
export class ConfigurationModule {

}
