"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../constants");
function gRpcGateway(options) {
    return (target) => {
        Reflect.defineMetadata(constants_1.GRPC_GATEWAY_METADATA, true, target);
        Reflect.defineMetadata(constants_1.GRPC_GATEWAY_PACKAGE, options.package, target);
        Reflect.defineMetadata(constants_1.GRPC_GATEWAY_PROTO, options.proto, target);
    };
}
exports.gRpcGateway = gRpcGateway;

//# sourceMappingURL=grpc-gateway.decorator.js.map
