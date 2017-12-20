"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@notadd/core");
const application_module_1 = require("./modules/application.module");
const common_1 = require("@nestjs/common");
const ip = require("ip");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const port = 3000;
    const address = `http://${ip.address()}:${port}`;
    /**
     * @type { INestApplication }
     */
    const application = await core_1.NotaddFactory.create(application_module_1.ApplicationModule);
    /**
     * @type { Logger }
     */
    const logger = new common_1.Logger('NotaddFactory', true);
    /**
     * @type { SwaggerBaseConfig }
     */
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Notadd')
        .setDescription('API document for Notadd.')
        .setVersion('2.0')
        .addBearerAuth()
        .build();
    /**
     * @type {SwaggerDocument}
     */
    const document = swagger_1.SwaggerModule.createDocument(application, options);
    swagger_1.SwaggerModule.setup('/api-doc', application, document);
    await application.listen(port, () => {
        logger.log(`Server on: ${address}`);
    });
}
exports.bootstrap = bootstrap;
