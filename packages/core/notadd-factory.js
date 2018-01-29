"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_adapter_1 = require("@nestjs/core/adapters/express-adapter");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
class NotaddFactoryStatic extends core_1.NestFactoryStatic {
    constructor() {
        super();
        this._logger = new common_1.Logger("NotaddFactory", true);
    }
    create(module, express = express_adapter_1.ExpressAdapter.create()) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

`);
            this._logger.log("Starting Notadd...");
            let created = yield _super("create").call(this, module, express);
            this._logger.log("Notadd successfully started");
            return created;
        });
    }
}
exports.NotaddFactoryStatic = NotaddFactoryStatic;
exports.NotaddFactory = new NotaddFactoryStatic();
