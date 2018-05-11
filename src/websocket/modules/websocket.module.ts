import { EventGateway } from "../gateways";
import { Module } from "@nestjs/common";

@Module({
    providers: [
        EventGateway,
    ],
})
export class WebsocketModule {
}
