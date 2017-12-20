"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@notadd/core");
const application_module_1 = require("./application.module");
const common_1 = require("@nestjs/common");
const ip = require("ip");
async function bootstrap() {
    const port = 3000;
    const address = 'http://' + ip.address() + ':' + port;
    const application = await core_1.NotaddFactory.create(application_module_1.ApplicationModule);
    const logger = new common_1.Logger('NotaddFactory', true);
    await application.listen(port, () => {
        logger.log(`Server on: ${address}`);
    });
}
exports.bootstrap = bootstrap;
