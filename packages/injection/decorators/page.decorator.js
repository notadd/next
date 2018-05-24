"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
function Form() {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(constants_1.PAGE_FORM, key)(target, key, descriptor);
    };
}
exports.Form = Form;
function Page(metadata) {
    return (target) => {
        if (metadata.description && metadata.hasOwnProperty("description")) {
            Reflect.defineMetadata(constants_1.PAGE_DESCRIPTION, metadata.description, target);
        }
        if (metadata.identification && metadata.hasOwnProperty("identification")) {
            Reflect.defineMetadata(constants_1.PAGE_IDENTIFICATION, metadata.identification, target);
        }
        if (metadata.name && metadata.hasOwnProperty("name")) {
            Reflect.defineMetadata(constants_1.PAGE_NAME, metadata.name, target);
        }
    };
}
exports.Page = Page;
function Schema() {
    return (target, key, descriptor) => {
        return common_1.ReflectMetadata(constants_1.PAGE_SCHEMA, key)(target, key, descriptor);
    };
}
exports.Schema = Schema;

//# sourceMappingURL=page.decorator.js.map
