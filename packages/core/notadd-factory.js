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
const nest_factory_1 = require("@nestjs/core/nest-factory");
class NotaddFactoryStatic extends nest_factory_1.NestFactoryStatic {
    start(module, options) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);
            return _super("create").call(this, module, options);
        });
    }
}
exports.NotaddFactoryStatic = NotaddFactoryStatic;
exports.NotaddFactory = new NotaddFactoryStatic();
