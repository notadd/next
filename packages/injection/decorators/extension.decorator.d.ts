import 'reflect-metadata';
import { ExtensionShellMetadata } from "../metadatas";
import { Author } from "../types";
export declare function Extension(obj: {
    authors?: Author[];
    description?: string;
    exports?: any[];
    identification: string;
    imports?: any[];
    components?: any[];
    controllers?: any[];
    modules?: any[];
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
}): ClassDecorator;
