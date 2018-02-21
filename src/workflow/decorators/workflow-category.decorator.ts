import "reflect-metadata";
import { ReflectMetadata } from "@nestjs/common";
import { WORKFLOW_CATEGORY } from "../constants";

export function Category(): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(WORKFLOW_CATEGORY, key)(target, key, descriptor);
    };
}
