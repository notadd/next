import 'reflect-metadata';
export declare function Module(obj: {
    authors?: Author[];
    exports?: any[];
    identification: string;
    imports?: any[];
    components?: any[];
    controllers?: any[];
    modules?: any[];
    version: string;
}): ClassDecorator;
