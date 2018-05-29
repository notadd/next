import "reflect-metadata";
import { InjectionType } from "@notadd/core/constants/injection.constants";

import { AddonMetadata } from "../metadatas";
import { INJECTION_TYPE } from "../constants";

export function Addon(metadata: AddonMetadata): ClassDecorator {
    metadata.modules = metadata.imports && !metadata.modules ? metadata.imports : metadata.modules;

    return (target: any) => {
        for (const property in metadata) {
            if (metadata.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, metadata[ property ], target);
            }
        }
        Reflect.defineMetadata(INJECTION_TYPE, InjectionType.Addon, target);
    };
}
