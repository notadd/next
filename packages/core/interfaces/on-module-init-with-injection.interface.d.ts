import { InjectionMetadata } from "@notadd/injection/metadatas/injection.metadata";
export interface OnModuleInitWithInjection {
    onModuleInitWithInjection(): Promise<Array<InjectionMetadata>>;
}
