import "reflect-metadata";
import { AdministrationMetadata } from "../metadatas/administration.metadata";
import { ADMINISTRATION_METADATA } from "@notadd/core/constants";

export function Administration(metadata?: AdministrationMetadata): ClassDecorator {
    return (target: any, key?, descriptor?) => {
        if (descriptor) {
            Reflect.defineMetadata(ADMINISTRATION_METADATA, key, descriptor.value);

            return descriptor;
        } else {
            if (metadata) {
                Reflect.defineMetadata(ADMINISTRATION_METADATA, target.name, metadata);
            } else {
                throw new Error("While using decorator on a class, metadata must be set!");
            }
        }
    };
}
