import "reflect-metadata";
import { DASHBOARD_METADATA } from "../constants";
import { ReflectMetadata } from "@nestjs/common";

export function Dashboard(name?: string): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        return ReflectMetadata(DASHBOARD_METADATA, name ? name : key)(target, key, descriptor);
    };
}
