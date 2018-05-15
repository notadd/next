import "reflect-metadata";
export declare function Form(): MethodDecorator;
export declare function Page(metadata: {
    description?: string;
    identification?: string;
    name?: string;
}): ClassDecorator;
export declare function Schema(): MethodDecorator;
