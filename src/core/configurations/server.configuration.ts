import { ServerHttpConfiguration } from "./server-http.configuration";
import { ServerWebsocketConfiguration } from "./server-websocket.configuration";

export type ServerConfiguration = {
    http: ServerHttpConfiguration,
    websocket: ServerWebsocketConfiguration,
};
