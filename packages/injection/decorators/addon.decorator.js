"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Addon(obj) {
    obj.modules = obj.imports && !obj.modules ? obj.imports : obj.modules;
    return (target) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
    };
}
exports.Addon = Addon;
