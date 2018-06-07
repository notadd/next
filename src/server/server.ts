import { Logger, ValidationPipe } from "@nestjs/common";
import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { FastifyAdapter } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NotaddFactory } from "@notadd/core";
import { Configuration } from "@notadd/core/loaders";
import { LogService } from "@notadd/logger/services";
import * as express from "express";
import * as ip from "ip";
import "reflect-metadata";
import * as serveStatic from "serve-static";

import { ApplicationModule } from "./modules";

export class ServerStarter {
    /**
     * @type { INestApplication }
     */
    protected instance: INestApplication;

    /**
     * @type { Logger }
     */
    protected logger = new Logger("NotaddFactory", true);

    public check() {
        let result = true;
        if (!Configuration.existsApplicationConfiguration()) {
            this.logger.error("Application configuration do not exists!");
            this.logger.warn("Your version of Notadd has expired. Application aborted!");
            result = false;
        }
        if (!Configuration.existsDatabaseConfiguration()) {
            this.logger.error("Database configuration do not exists!");
            this.logger.warn("Please usg command: [yarn run:install] to finish installation. Application aborted!");
            result = false;
        }
        if (!Configuration.existsServerConfiguration()) {
            this.logger.error("Your version of Notadd has expired. Application aborted!");
            result = false;
        }
        if (!Configuration.existsSwaggerConfiguration()) {
            this.logger.error("Your version of Notadd has expired. Application aborted!");
            result = false;
        }
        if (!result) {
            this.logger.error("Application environmental detection with error!");
            process.exit(1);
        }
    }

    async start() {
        this.check();

        const graphqlConfiguration = Configuration.loadGraphqlConfiguration();
        const serverConfiguration = Configuration.loadServerConfiguration();

        let index = process.argv.indexOf("--port");
        const port = index > -1
            ? parseInt(process.argv[index + 1])
            : serverConfiguration.http.port ? serverConfiguration.http.port : 3000;
        index = process.argv.indexOf("--host");
        const host = index > -1
            ?
            process.argv[index + 1]
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

        let application: INestApplication;
        if (serverConfiguration.adapter === "fastify") {
            const adapter = new FastifyAdapter();

            application = await NotaddFactory.startWithFastify(ApplicationModule, adapter, {
                bodyParser: true,
                cors: true,
                logger: LogService,
            });
            application.use("/", serveStatic(`${process.cwd()}/public`));
        } else {
            application = await NotaddFactory.startWithExpress(ApplicationModule, {
                bodyParser: true,
                cors: true,
                logger: LogService,
            });
            application.use(express.static(process.cwd() + "/public/"));
        }
        application.useGlobalPipes(new ValidationPipe());

        const swaggerConfiguration = Configuration.loadSwaggerConfiguration();

        if (serverConfiguration.adapter !== "fastify" && swaggerConfiguration.enable) {
            const options = new DocumentBuilder()
                .setTitle("Notadd")
                .setDescription("API document for Notadd.")
                .setVersion("2.0")
                .addBearerAuth()
                .build();

            const document = SwaggerModule.createDocument(application, options);

            SwaggerModule.setup(`/${swaggerConfiguration.endpoint}`, application, document);
        }

        const callback = () => {
            if (graphqlConfiguration.ide.enable) {
                this.logger.log(`Graphql IDE Server on: ${address}/graphiql`);
            }

            if (serverConfiguration.adapter !== "fastify" && swaggerConfiguration.enable) {
                this.logger.log(`Swagger Server on: ${address}/${swaggerConfiguration.endpoint}`);
            }

            this.logger.log(`Server on: ${address}`);
        };

        index = process.argv.indexOf("--host");

        if (index > -1) {
            await application.listen(port, process.argv[index + 1], callback);
        } else if (serverConfiguration.http.host && serverConfiguration.http.host !== "*") {
            await application.listen(port, serverConfiguration.http.host, callback);
        } else {
            await application.listen(port, "0.0.0.0", callback);
        }
    }
}
