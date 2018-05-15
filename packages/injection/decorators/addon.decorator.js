"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
const constants_1 = require("../constants");
function Addon(metadata) {
    metadata.modules = metadata.imports && !metadata.modules ? metadata.imports : metadata.modules;
    return (target) => {
        for (const property in metadata) {
            if (metadata.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, metadata[property], target);
            }
        }
        Reflect.defineMetadata(constants_1.INJECTION_TYPE, injection_constants_1.InjectionType.Addon, target);
    };
}
exports.Addon = Addon;

//# sourceMappingURL=addon.decorator.js.map
