"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Administration(metadata) {
    return (target, key, descriptor) => {
        if (descriptor) {
            Reflect.defineMetadata("__ADMINISTRATION_METADATA__", key, descriptor.value);
            return descriptor;
        }
        else {
            if (metadata) {
                Reflect.defineMetadata("__ADMINISTRATION_METADATA__", target.name, metadata);
            }
            else {
                throw new Error("While using decorator on a class, metadata must be set!");
            }
        }
    };
}
exports.Administration = Administration;

//# sourceMappingURL=administration.decorator.js.map
