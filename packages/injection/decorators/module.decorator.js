"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
function Module(obj) {
    obj.modules = obj.imports && !obj.modules ? obj.imports : obj.modules;
    return (target) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata("__injection_type__", injection_constants_1.InjectionType.Module, target);
    };
}
exports.Module = Module;
