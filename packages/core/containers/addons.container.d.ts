import { Addon } from "../injectors/addon.injector";
import { IContainer } from "../interfaces/container.interface";
import { InjectionMetadata } from "@notadd/injection/metadatas/injection.metadata";
import { NestContainer } from "@nestjs/core/injector/container";
export declare class AddonsContainer extends Map<string, Addon> implements IContainer {
    build(list: Array<InjectionMetadata>, container: NestContainer): void;
}
