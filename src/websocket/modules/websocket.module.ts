import { EventGateway } from "../gateways";
import { Module } from "@nestjs/common";

@Module({
    components: [
        EventGateway,
    ],
})
export class WebsocketModule {
}
