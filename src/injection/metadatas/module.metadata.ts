import { Assets } from "../interfaces";
import { InjectionMetadata } from "./injection.metadata";

export interface ModuleMetadata extends InjectionMetadata {
    assets?: Assets;
    graphql?: string;
}
