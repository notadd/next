import { Extension } from "../injectors/extension.injector";
import { IContainer } from "@notadd/core/interfaces/container.interface";
import { InjectionMetadata } from "@notadd/injection/metadatas/injection.metadata";
import { NestContainer } from "@nestjs/core/injector/container";

export class ExtensionsContainer extends Map<string, Extension> implements IContainer {
    build(list: Array<InjectionMetadata>, container: NestContainer) {
    }
}
