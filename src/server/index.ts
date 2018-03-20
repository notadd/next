import * as express from "express";
import * as ip from "ip";
import { ApplicationModule } from "./modules";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { existsSync } from 'fs';
import { join } from 'path';
import { Logger, ValidationPipe } from "@nestjs/common";
import { LogService } from "@notadd/logger/services";
import { NotaddFactory } from "@notadd/core";
import { ServerConfiguration } from "../core/configurations/server.configuration";

export * from "./modules/application.module";

export async function bootstrap() {
    /**
     * @type { Logger }
     */
    const logger = new Logger("NotaddFactory", true);
    if (!existsSync(join(process.cwd(), "configurations", "database.json"))) {
        logger.error("Database configuration do not exists!");
        logger.warn("Please usg command: [yarn run:install] to finish installation. Application aborted!");
        process.exit(1);
    }
    if (!existsSync(join(process.cwd(), "configurations", "server.json"))) {
        logger.error("Server configuration do not exists!");
    }

    const configuration: ServerConfiguration = require(join(process.cwd(), "configurations", "server.json"));

    const index = process.argv.indexOf("--port");
    const port = index > -1 ? parseInt(process.argv[index + 1]) : configuration.http.port ? configuration.http.port : 3000;
    const host = configuration.http.host
        ? (
            configuration.http.host === "*"
                ? ip.address()
                : configuration.http.host
        )
        : ip.address();
    const address = `http://${host}:${port}`;

    /**
     * @type { INestApplication }
     */
    const application = await NotaddFactory.start(ApplicationModule, {
        bodyParser: true,
        cors: true,
        logger: LogService,
    });
    application.use(express.static(process.cwd() + "/public/"));
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
    const callback = () => {
        logger.log(`Graphql IDE Server on: ${address}/graphiql`);
        logger.log(`Swagger Server on: ${address}/api-doc`);
        logger.log(`Server on: ${address}`);
    };

    if (configuration.http.host && configuration.http.host !== "*") {
        await application.listen(port, configuration.http.host, callback);
    } else {
        await application.listen(port, callback);
    }
}
