import { ServerHttpConfiguration } from "./server-http.configuration";
import { ServerWebsocketConfiguration } from "./server-websocket.configuration";
export interface ServerConfiguration {
    http: ServerHttpConfiguration;
    websocket: ServerWebsocketConfiguration;
}
