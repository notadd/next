import { Assets } from "../interfaces/assets";
import { InjectionMetadata } from "./injection.metadata";
export interface ModuleMetadata extends InjectionMetadata {
    assets?: Assets;
    graphql?: string;
}
