import { ReflectMetadata } from "@nestjs/common";
import { SYSTEM_INFORMATION } from "../constants";

export function Information(name?: string): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(SYSTEM_INFORMATION, name ? name : key)(target, key, descriptor);
    };
}
