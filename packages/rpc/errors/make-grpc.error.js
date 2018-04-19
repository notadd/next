"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = require("grpc");
function makeGrpcError(error) {
    return Object.assign({ code: grpc_1.status.INTERNAL, message: "Internal Server Error" }, error);
}
exports.makeGrpcError = makeGrpcError;

//# sourceMappingURL=make-grpc.error.js.map
