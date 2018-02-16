"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("@nestjs/microservices/constants");
function Rpc() {
    return (target, propertyKey, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            return original.bind(this)(...args);
        };
        Object.defineProperty(descriptor.value, 'name', {
            value: original.name,
            writable: false,
        });
        Reflect.defineMetadata(constants_1.PATTERN_METADATA, { rpc: propertyKey }, descriptor.value);
        Reflect.defineMetadata(constants_1.PATTERN_HANDLER_METADATA, true, descriptor.value);
        return descriptor;
    };
}
exports.Rpc = Rpc;
