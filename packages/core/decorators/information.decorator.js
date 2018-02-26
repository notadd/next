"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
function Information(name) {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(constants_1.SYSTEM_INFORMATION, name ? name : key)(target, key, descriptor);
    };
}
exports.Information = Information;
