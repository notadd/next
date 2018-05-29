import "reflect-metadata";
import { ReflectMetadata } from "@nestjs/common";

import { DASHBOARD_METADATA } from "../constants/dashboard.constants";

export function Dashboard(name?: string): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        return ReflectMetadata(DASHBOARD_METADATA, name ? name : key)(target, key, descriptor);
    };
}
