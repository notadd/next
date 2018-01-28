import { ConfigurationService } from "../services/configuration.service";
import { MiddlewaresConsumer, Module } from "@nestjs/common";

@Module({
    components: [
        ConfigurationService,
    ],
})
export class ConfigurationModule {
    configure(consumer: MiddlewaresConsumer) {
    }
}
