import { IContainer } from "@notadd/core/interfaces/container.interface";
import { InjectionMetadata } from "@notadd/injection/metadatas/injection.metadata";
import { Module } from "../injectors/module.injector";
import { NestContainer } from "@nestjs/core/injector/container";

export class ModulesContainer extends Map<string, Module> implements IContainer {
    build(list: Array<InjectionMetadata>, container: NestContainer) {
    }
}
