import { ExtensionShellMetadata } from "./index";
import { InjectionMetadata } from "./injection.metadata";
export interface ExtensionMetadata extends InjectionMetadata {
    shell?: ExtensionShellMetadata;
}
