"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const system_information_constants_1 = require("../constants/system-information.constants");
function Information(name) {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(system_information_constants_1.SYSTEM_INFORMATION, name ? name : key)(target, key, descriptor);
    };
}
exports.Information = Information;
