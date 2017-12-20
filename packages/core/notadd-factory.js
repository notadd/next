"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_adapter_1 = require("@nestjs/core/adapters/express-adapter");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
class NotaddFactoryStatic extends core_1.NestFactoryStatic {
    constructor() {
        super();
        this._logger = new common_1.Logger('NotaddFactory', true);
    }
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
        this._logger.log('Starting Notadd...');
        let created = await super.create(module, express);
        this._logger.log('Notadd successfully started');
        return created;
    }
}
exports.NotaddFactoryStatic = NotaddFactoryStatic;
exports.NotaddFactory = new NotaddFactoryStatic();
