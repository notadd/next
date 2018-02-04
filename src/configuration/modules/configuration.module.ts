import { ConfigurationService } from "../services";
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
