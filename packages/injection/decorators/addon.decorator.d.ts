import "reflect-metadata";
import { Author } from "../types";
export declare function Addon(obj: {
    authors?: Author[];
    description?: string;
    exports?: any[];
    identification: string;
    imports?: any[];
    components?: any[];
    controllers?: any[];
    modules?: any[];
    name: string;
    version: string;
}): ClassDecorator;
