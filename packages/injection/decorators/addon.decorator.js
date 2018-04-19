"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
const constants_1 = require("../constants");
function Addon(obj) {
    obj.modules = obj.imports && !obj.modules ? obj.imports : obj.modules;
    return (target) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata(constants_1.INJECTION_TYPE, injection_constants_1.InjectionType.Addon, target);
    };
}
exports.Addon = Addon;

//# sourceMappingURL=addon.decorator.js.map
