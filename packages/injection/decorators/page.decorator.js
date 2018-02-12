"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const page_constants_1 = require("../constants/page.constants");
const common_1 = require("@nestjs/common");
function Form() {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(page_constants_1.PAGE_FORM, key)(target, key, descriptor);
    };
}
exports.Form = Form;
function Page(obj) {
    return (target) => {
        if (obj.description && obj.hasOwnProperty("description")) {
            Reflect.defineMetadata(page_constants_1.PAGE_DESCRIPTION, obj.description, target);
        }
        if (obj.name && obj.hasOwnProperty("name")) {
            Reflect.defineMetadata(page_constants_1.PAGE_NAME, obj.name, target);
        }
    };
}
exports.Page = Page;
function Schema() {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(page_constants_1.PAGE_SCHEMA, key)(target, key, descriptor);
    };
}
exports.Schema = Schema;
