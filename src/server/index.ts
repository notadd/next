import * as express from "express";
import * as ip from "ip";
import { ApplicationModule } from "./modules";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger, ValidationPipe } from "@nestjs/common";
import { LogService } from "@notadd/logger/services";
import { NotaddFactory } from "@notadd/core";
import { GraphqlConfiguration } from "@notadd/core/configurations/graphql.configuration";
import { Configuration } from "@notadd/core/loaders";

export * from "./modules/application.module";

export async function bootstrap() {
    /**
     * @type { Logger }
     */
    const logger = new Logger("NotaddFactory", true);
    if (!Configuration.existsDatabaseConfiguration()) {
        logger.error("Database configuration do not exists!");
        logger.warn("Please usg command: [yarn run:install] to finish installation. Application aborted!");
        process.exit(1);
    }
    if (!Configuration.existsServerConfiguration()) {
        logger.error("Server configuration do not exists!");
    }

    const serverConfiguration = Configuration.loadServerConfiguration();
    const graphqlConfiguration = Configuration.loadGraphqlConfiguration();

    let index = process.argv.indexOf("--port");
    const port = index > -1
        ? parseInt(process.argv[ index + 1 ])
        : serverConfiguration.http.port ? serverConfiguration.http.port : 3000;
    index = process.argv.indexOf("--host");
    const host = index > -1
        ?
        process.argv[ index + 1 ]
        :
        serverConfiguration.http.host
            ? (
                serverConfiguration.http.host === "*"
                    ? ip.address()
                    : serverConfiguration.http.host
            )
            :
            ip.address();
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
        if (graphqlConfiguration.ide.enable) {
            logger.log(`Graphql IDE Server on: ${address}/graphiql`);
        }
        logger.log(`Swagger Server on: ${address}/api-doc`);
        logger.log(`Server on: ${address}`);
    };

    index = process.argv.indexOf("--host");

    if (index > -1) {
        await application.listen(port, process.argv[ index + 1 ], callback);
    } else if (serverConfiguration.http.host && serverConfiguration.http.host !== "*") {
        await application.listen(port, serverConfiguration.http.host, callback);
    } else {
        await application.listen(port, callback);
    }
}
