import "reflect-metadata";
import { AdministrationMetadata } from "../metadatas/administration.metadata";

export function Administration(metadata?: AdministrationMetadata): ClassDecorator {
    return (target: any, key?, descriptor?) => {
        if (descriptor) {
            Reflect.defineMetadata("__ADMINISTRATION_METADATA__", key, descriptor.value);

            return descriptor;
        } else {
            if (metadata) {
                Reflect.defineMetadata("__ADMINISTRATION_METADATA__", target.name, metadata);
            } else {
                throw new Error("While using decorator on a class, metadata must be set!");
            }
        }
    };
}
