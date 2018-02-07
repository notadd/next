import 'reflect-metadata';
import { InjectionType } from "@notadd/core/constants/injection.constants";

export function Module(obj: {
    authors?: Author[],
    exports?: any[],
    identification: string,
    imports?: any[],
    components?: any[],
    controllers?: any[],
    modules?: any[],
    version: string,
}): ClassDecorator {
    obj.modules = obj.imports && !obj.modules ? obj.imports : obj.modules;

    return (target: any) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata("__injection_type__", InjectionType.Module, target);
    };
}
