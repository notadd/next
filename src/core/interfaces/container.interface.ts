import { NestContainer } from "@nestjs/core/injector/container";
import { InjectionMetadata } from "@notadd/injection/metadatas/injection.metadata";

export interface IContainer {
    build(list: Array<InjectionMetadata>, container: NestContainer);
}
