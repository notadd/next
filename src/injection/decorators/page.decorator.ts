import "reflect-metadata";
import { ReflectMetadata } from "@nestjs/common";

import { PAGE_DESCRIPTION, PAGE_FORM, PAGE_IDENTIFICATION, PAGE_NAME, PAGE_SCHEMA } from "../constants/page.constants";

export function Form(): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(PAGE_FORM, key)(target, key, descriptor);
    };
}

export function Page(metadata: {
    description?: string,
    identification?: string,
    name?: string,
}): ClassDecorator {
    return (target: any) => {
        if (metadata.description && metadata.hasOwnProperty("description")) {
            Reflect.defineMetadata(PAGE_DESCRIPTION, metadata.description, target);
        }
        if (metadata.identification && metadata.hasOwnProperty("identification")) {
            Reflect.defineMetadata(PAGE_IDENTIFICATION, metadata.identification, target);
        }
        if (metadata.name && metadata.hasOwnProperty("name")) {
            Reflect.defineMetadata(PAGE_NAME, metadata.name, target);
        }
    };
}

export function Schema(): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        return ReflectMetadata(PAGE_SCHEMA, key)(target, key, descriptor);
    };
}
