"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_adapter_1 = require("@nestjs/core/adapters/express-adapter");
const core_1 = require("@nestjs/core");
class NotaddFactoryStatic extends core_1.NestFactoryStatic {
    /**
     * @param module
     * @param { any } express
     *
     * @returns { Promise<INestApplication> }
     */
    async create(module, express = express_adapter_1.ExpressAdapter.create()) {
        console.log(`
                         _            _     _
             _ __   ___ | |_ __ _  __| | __| |
            | '_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
            | | | | (_) | || (_| | (_| | (_| |
            |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);
        return super.create(module, express);
    }
}
exports.NotaddFactoryStatic = NotaddFactoryStatic;
exports.NotaddFactory = new core_1.NestFactoryStatic();
