import { ExtensionShellMetadata } from "./extension-shell.metadata";
import { InjectionMetadata } from "./injection.metadata";
export interface ExtensionMetadata extends InjectionMetadata {
    shell?: ExtensionShellMetadata;
}
