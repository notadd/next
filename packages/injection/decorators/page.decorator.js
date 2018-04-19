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
function Page(obj) {
    return (target) => {
        if (obj.description && obj.hasOwnProperty("description")) {
            Reflect.defineMetadata(constants_1.PAGE_DESCRIPTION, obj.description, target);
        }
        if (obj.identification && obj.hasOwnProperty("identification")) {
            Reflect.defineMetadata(constants_1.PAGE_IDENTIFICATION, obj.identification, target);
        }
        if (obj.name && obj.hasOwnProperty("name")) {
            Reflect.defineMetadata(constants_1.PAGE_NAME, obj.name, target);
        }
    };
}
exports.Page = Page;
function Schema() {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(constants_1.PAGE_SCHEMA, key)(target, key, descriptor);
    };
}
exports.Schema = Schema;

//# sourceMappingURL=page.decorator.js.map
