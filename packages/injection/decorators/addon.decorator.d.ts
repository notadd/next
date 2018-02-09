import "reflect-metadata";
import { Author } from "../types/author.type";
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
