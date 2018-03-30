import "reflect-metadata";
import { PATTERN_HANDLER_METADATA, PATTERN_METADATA } from "@nestjs/microservices/constants";

export function Rpc() {
    return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;

        descriptor.value = function(...args: Array<any>) {
            return original.bind(this)(...args);
        };

        Object.defineProperty(descriptor.value, "name", {
            value: original.name,
            writable: false,
        });

        Reflect.defineMetadata(
            PATTERN_METADATA,
            { rpc: propertyKey },
            descriptor.value,
        );
        Reflect.defineMetadata(PATTERN_HANDLER_METADATA, true, descriptor.value);

        return descriptor;
    };
}
