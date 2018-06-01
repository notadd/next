import { ServerHttpConfiguration } from "./server-http.configuration";
import { ServerWebsocketConfiguration } from "./server-websocket.configuration";

export interface ServerConfiguration {
    adapter: "express" | "fastify";
    http: ServerHttpConfiguration;
    websocket: ServerWebsocketConfiguration;
}
