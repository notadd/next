import 'reflect-metadata';
import { DASHBOARD_DATA_METADATA, DASHBOARD_NAME_METADATA } from "../constants";
import { ReflectMetadata } from "@nestjs/common";

export function Dashboard(name?: string): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(DASHBOARD_DATA_METADATA, name ? name : key)(target, key, descriptor);
        ReflectMetadata(DASHBOARD_NAME_METADATA, name ? name : key)(target, key, descriptor);
    };
}
