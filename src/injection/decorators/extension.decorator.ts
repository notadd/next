import "reflect-metadata";
import { InjectionType } from "@notadd/core/constants/injection.constants";

import { ExtensionMetadata } from "../metadatas/extension.metadata";
import { INJECTION_TYPE } from "../constants/injection.constants";

export function Extension(metadata: ExtensionMetadata): ClassDecorator {
    metadata.modules = metadata.imports && !metadata.modules ? metadata.imports : metadata.modules;

    return (target: any) => {
        for (const property in metadata) {
            if (metadata.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, metadata[property], target);
            }
        }
        Reflect.defineMetadata(INJECTION_TYPE, InjectionType.Extension, target);
    };
}
