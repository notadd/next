import 'reflect-metadata';
export declare function Addon(obj: {
    authors?: Author[];
    exports?: any[];
    identification: string;
    imports?: any[];
    components?: any[];
    controllers?: any[];
    modules?: any[];
    version: string;
}): ClassDecorator;
