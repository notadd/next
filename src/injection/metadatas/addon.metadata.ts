import { Assets } from "../interfaces";
import { InjectionMetadata } from "./injection.metadata";

export interface AddonMetadata extends InjectionMetadata {
    assets?: Assets;
    graphql?: string;
}
