import 'reflect-metadata';
import { Author } from "../interfaces";
import { INJECTION_TYPE } from "../constants";
import { InjectionType } from "@notadd/core/constants/injection.constants";

export function Module(obj: {
    authors?: Author[],
    description?: string,
    exports?: any[],
    identification: string,
    imports?: any[],
    components?: any[],
    controllers?: any[],
    modules?: any[],
    name: string,
    version: string,
}): ClassDecorator {
    obj.modules = obj.imports && !obj.modules ? obj.imports : obj.modules;

    return (target: any) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata(INJECTION_TYPE, InjectionType.Module, target);
    };
}
