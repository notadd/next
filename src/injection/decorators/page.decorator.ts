import "reflect-metadata";
import { PAGE_DESCRIPTION, PAGE_FORM, PAGE_NAME, PAGE_SCHEMA } from "../constants/page.constants";
import { ReflectMetadata } from "@nestjs/common";

export function Form(): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(PAGE_FORM, key)(target, key, descriptor);
    };
}

export function Page(obj: {
    name?: string,
    description?: string,
}): ClassDecorator {
    return (target: any) => {
        if (obj.description && obj.hasOwnProperty("description")) {
            Reflect.defineMetadata(PAGE_DESCRIPTION, obj.description, target);
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
