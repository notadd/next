import 'reflect-metadata';
import { ReflectMetadata } from "@nestjs/common";
import { DASHBOARD_DATA_METADATA, DASHBOARD_NAME_METADATA } from "../constants/dashboard.constants";

export function Dashboard(name?: string): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(DASHBOARD_DATA_METADATA, name ? name : key)(target, key, descriptor);
        ReflectMetadata(DASHBOARD_NAME_METADATA, name ? name : key)(target, key, descriptor);
    };
}
