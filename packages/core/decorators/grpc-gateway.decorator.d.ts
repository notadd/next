import "reflect-metadata";
import { GrpcGatewayMetadata } from "../interfaces/grpc-gateway-metadata.interface";
export declare function gRpcGateway(options?: GrpcGatewayMetadata): (target: object) => void;
