import { InjectionMetadata } from "@notadd/injection/metadatas/injection.metadata";
import { NestContainer } from "@nestjs/core/injector/container";
export interface IContainer {
    build(list: Array<InjectionMetadata>, container: NestContainer): any;
}
