"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const ip = require("ip");
const modules_1 = require("./modules");
const loaders_1 = require("@notadd/core/loaders");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const services_1 = require("@notadd/logger/services");
const core_1 = require("@notadd/core");
class ServerStarter {
    constructor() {
        this.logger = new common_1.Logger("NotaddFactory", true);
    }
    check() {
        let result = true;
        if (!loaders_1.Configuration.existsApplicationConfiguration()) {
            this.logger.error("Application configuration do not exists!");
            this.logger.warn("Your version of Notadd has expired. Application aborted!");
            result = false;
        }
        if (!loaders_1.Configuration.existsDatabaseConfiguration()) {
            this.logger.error("Database configuration do not exists!");
            this.logger.warn("Please usg command: [yarn run:install] to finish installation. Application aborted!");
            result = false;
        }
        if (!loaders_1.Configuration.existsServerConfiguration()) {
            this.logger.error("Your version of Notadd has expired. Application aborted!");
            result = false;
        }
        if (!loaders_1.Configuration.existsSwaggerConfiguration()) {
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
        const graphqlConfiguration = loaders_1.Configuration.loadGraphqlConfiguration();
        const serverConfiguration = loaders_1.Configuration.loadServerConfiguration();
        const swaggerConfiguration = loaders_1.Configuration.loadSwaggerConfiguration();
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
                    ? (serverConfiguration.http.host === "*"
                        ? ip.address()
                        : serverConfiguration.http.host)
                    :
                        ip.address();
        const address = `http://${host}:${port}`;
        const application = await core_1.NotaddFactory.start(modules_1.ApplicationModule, {
            bodyParser: true,
            cors: true,
            logger: services_1.LogService,
        });
        application.use(express.static(process.cwd() + "/public/"));
        application.useGlobalPipes(new common_1.ValidationPipe());
        if (swaggerConfiguration.enable) {
            const options = new swagger_1.DocumentBuilder()
                .setTitle("Notadd")
                .setDescription("API document for Notadd.")
                .setVersion("2.0")
                .addBearerAuth()
                .build();
            const document = swagger_1.SwaggerModule.createDocument(application, options);
            swagger_1.SwaggerModule.setup(`/${swaggerConfiguration.endpoint}`, application, document);
        }
        const callback = () => {
            if (graphqlConfiguration.ide.enable) {
                this.logger.log(`Graphql IDE Server on: ${address}/graphiql`);
            }
            if (swaggerConfiguration.enable) {
                this.logger.log(`Swagger Server on: ${address}/${swaggerConfiguration.endpoint}`);
            }
            this.logger.log(`Server on: ${address}`);
        };
        index = process.argv.indexOf("--host");
        if (index > -1) {
            await application.listen(port, process.argv[index + 1], callback);
        }
        else if (serverConfiguration.http.host && serverConfiguration.http.host !== "*") {
            await application.listen(port, serverConfiguration.http.host, callback);
        }
        else {
            await application.listen(port, callback);
        }
    }
}
exports.ServerStarter = ServerStarter;

//# sourceMappingURL=server.js.map
