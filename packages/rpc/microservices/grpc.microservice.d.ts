import { CustomTransportStrategy, Server } from "@nestjs/microservices";
import { GrpcServerConfig } from "../interfaces";
export declare class GrpcMicroservice extends Server implements CustomTransportStrategy {
    private readonly server;
    private readonly host;
    private readonly port;
    private readonly serviceName;
    constructor(server: any, config: GrpcServerConfig);
    listen(callback?: () => void): void;
    close(): void;
    private init();
    private wrapRpc(delegate);
    private getGRPCDelegates();
}
