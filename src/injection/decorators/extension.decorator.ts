import 'reflect-metadata';

export function Extension(obj: {
    identification: string,
}): ClassDecorator {
    return (target: any) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
    };
}
