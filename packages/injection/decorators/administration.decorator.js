"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("@notadd/core/constants");
function Administration(metadata) {
    return (target, key, descriptor) => {
        if (descriptor) {
            Reflect.defineMetadata(constants_1.ADMINISTRATION_METADATA, key, descriptor.value);
            return descriptor;
        }
        else {
            if (metadata) {
                Reflect.defineMetadata(constants_1.ADMINISTRATION_METADATA, metadata, metadata);
            }
            else {
                throw new Error("While using decorator on a class, metadata must be set!");
            }
            return target;
        }
    };
}
exports.Administration = Administration;

//# sourceMappingURL=administration.decorator.js.map
