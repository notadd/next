import "reflect-metadata";
import { IS_WORKFLOW } from "../constants";

export function Workflow(obj: {
    identification: string,
}): ClassDecorator {
    return (target: any) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata(IS_WORKFLOW, true, target);
    };
}
