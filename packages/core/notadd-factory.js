"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nest_factory_1 = require("@nestjs/core/nest-factory");
class NotaddFactoryStatic extends nest_factory_1.NestFactoryStatic {
    async startWithFastify(module, httpServer, options) {
        console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);
        return super.create(module, httpServer, options);
    }
    async startWithExpress(module, options) {
        console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);
        return super.create(module, options);
    }
}
exports.NotaddFactoryStatic = NotaddFactoryStatic;
exports.NotaddFactory = new NotaddFactoryStatic();

//# sourceMappingURL=notadd-factory.js.map
