import { Assets } from "../interfaces/assets";
import { InjectionMetadata } from "./injection.metadata";
export interface AddonMetadata extends InjectionMetadata {
    assets?: Assets;
    graphql?: string;
}
