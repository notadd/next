import { Module } from "@nestjs/common";
import { EventGateway } from "../gateways/event.gateway";
import { MiddlewaresConsumer } from "@nestjs/common";

@Module({
    components: [
        EventGateway,
    ],
})
export class WebsocketModule {
    configure(consumer: MiddlewaresConsumer) {
    }
}
