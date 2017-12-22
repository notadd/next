import { NotaddFactory } from '@notadd/core';
import { ApplicationModule } from './modules/application.module';
import { Logger } from "@nestjs/common";
import * as ip from "ip";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { FlubErrorHandler } from "nestjs-flub/packages";

export async function bootstrap() {
    const port = 3000;
    const address = `http://${ip.address()}:${port}`;
    /**
     * @type { INestApplication }
     */
    const application = await NotaddFactory.create(ApplicationModule);
    application.useGlobalFilters(new FlubErrorHandler());
    /**
     * @type { Logger }
     */
    const logger = new Logger('NotaddFactory', true);
    /**
     * @type { SwaggerBaseConfig }
     */
    const options = new DocumentBuilder()
        .setTitle('Notadd')
        .setDescription('API document for Notadd.')
        .setVersion('2.0')
        .addBearerAuth()
        .build();
    /**
     * @type {SwaggerDocument}
     */
    const document = SwaggerModule.createDocument(application, options);

    SwaggerModule.setup('/api-doc', application, document);

    await application.listen(port, () => {
        logger.log(`Server on: ${address}`);
    });
}
