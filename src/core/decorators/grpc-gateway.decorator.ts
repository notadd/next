import "reflect-metadata";

import { GRPC_GATEWAY_METADATA, GRPC_GATEWAY_PACKAGE, GRPC_GATEWAY_PROTO } from "../constants";
import { GrpcGatewayMetadata } from "../interfaces/grpc-gateway-metadata.interface";

export function gRpcGateway(options?: GrpcGatewayMetadata) {
    return (target: object) => {
        Reflect.defineMetadata(GRPC_GATEWAY_METADATA, true, target);
        Reflect.defineMetadata(GRPC_GATEWAY_PACKAGE, options.package, target);
        Reflect.defineMetadata(GRPC_GATEWAY_PROTO, options.proto, target);
    };
}
