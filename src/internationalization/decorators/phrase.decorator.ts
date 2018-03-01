import { PHRASE_DEFINITION } from "../constants";
import { ReflectMetadata } from "@nestjs/common";

export function Phrase(name?: string): MethodDecorator {
    return (target: object, key?, descriptor?) => {
        ReflectMetadata(PHRASE_DEFINITION, name? name : key)(target, key, descriptor);
    };
}
