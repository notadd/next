"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../constants");
function Workflow(obj) {
    return (target) => {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                Reflect.defineMetadata(property, obj[property], target);
            }
        }
        Reflect.defineMetadata(constants_1.IS_WORKFLOW, true, target);
    };
}
exports.Workflow = Workflow;

//# sourceMappingURL=workflow.decorator.js.map
