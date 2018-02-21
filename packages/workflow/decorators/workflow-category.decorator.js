"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
function Category() {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(constants_1.WORKFLOW_CATEGORY, key)(target, key, descriptor);
    };
}
exports.Category = Category;
