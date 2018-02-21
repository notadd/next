import "reflect-metadata";
import { PAGE_DESCRIPTION, PAGE_FORM, PAGE_IDENTIFICATION, PAGE_NAME, PAGE_SCHEMA } from "../constants";
import { ReflectMetadata } from "@nestjs/common";

export function Form(): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(PAGE_FORM, key)(target, key, descriptor);
    };
}

export function Page(obj: {
    description?: string,
    identification?: string,
    name?: string,
}): ClassDecorator {
    return (target: any) => {
        if (obj.description && obj.hasOwnProperty("description")) {
            Reflect.defineMetadata(PAGE_DESCRIPTION, obj.description, target);
        }
        if (obj.identification && obj.hasOwnProperty("identification")) {
            Reflect.defineMetadata(PAGE_IDENTIFICATION, obj.identification, target);
        }
        if (obj.name && obj.hasOwnProperty("name")) {
            Reflect.defineMetadata(PAGE_NAME, obj.name, target);
        }
    };
}

export function Schema(): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(PAGE_SCHEMA, key)(target, key, descriptor);
    };
}
