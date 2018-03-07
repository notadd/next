import * as express from "express";
import * as ip from "ip";
import { ApplicationModule } from "./modules";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { existsSync } from 'fs';
import { FlubErrorHandler } from "nestjs-flub/packages";
import { join } from 'path';
import { Logger, ValidationPipe } from "@nestjs/common";
import { NotaddFactory } from "@notadd/core";

const cross = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");

    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

export async function bootstrap() {
    /**
     * @type { Logger }
     */
    const logger = new Logger("NotaddFactory", true);
    if (!existsSync(join(process.cwd(), 'ormconfig.yml'))) {
        logger.error("Database configuration do not exists!");
        logger.warn("Please usg command: [yarn run:install] to finish installation. Application aborted!");
        process.exit(1);
    }

    const index = process.argv.indexOf("--port");
    const port = index > -1 ? parseInt(process.argv[index + 1]) : 3000;
    const address = `http://${ip.address()}:${port}`;
    /**
     * @type { INestApplication }
     */
    const application = await NotaddFactory.start(ApplicationModule, {});
    application.use(express.static(process.cwd() + "/public/"));
    application.use(cross);
    application.useGlobalFilters(new FlubErrorHandler());
    application.useGlobalPipes(new ValidationPipe());
    /**
     * @type { SwaggerBaseConfig }
     */
    const options = new DocumentBuilder()
        .setTitle("Notadd")
        .setDescription("API document for Notadd.")
        .setVersion("2.0")
        .addBearerAuth()
        .build();
    /**
     * @type { SwaggerDocument }
     */
    const document = SwaggerModule.createDocument(application, options);

    SwaggerModule.setup("/api-doc", application, document);

    await application.listen(port, () => {
        logger.log(`Graphql IDE Server on: ${address}/graphiql`);
        logger.log(`Swagger Server on: ${address}/api-doc`);
        logger.log(`Server on: ${address}`);
    });
}

export * from "./modules/application.module";
