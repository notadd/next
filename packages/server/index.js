"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ip = require("ip");
const modules_1 = require("./modules");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const services_1 = require("@notadd/logger/services");
const core_1 = require("@notadd/core");
__export(require("./modules/application.module"));
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const logger = new common_1.Logger("NotaddFactory", true);
        if (!fs_1.existsSync(path_1.join(process.cwd(), "configurations", "database.json"))) {
            logger.error("Database configuration do not exists!");
            logger.warn("Please usg command: [yarn run:install] to finish installation. Application aborted!");
            process.exit(1);
        }
        if (!fs_1.existsSync(path_1.join(process.cwd(), "configurations", "server.json"))) {
            logger.error("Server configuration do not exists!");
        }
        const configuration = require(path_1.join(process.cwd(), "configurations", "server.json"));
        const index = process.argv.indexOf("--port");
        const port = index > -1 ? parseInt(process.argv[index + 1]) : configuration.http.port ? configuration.http.port : 3000;
        const host = configuration.http.host
            ? (configuration.http.host === "*"
                ? ip.address()
                : configuration.http.host)
            : ip.address();
        const address = `http://${host}:${port}`;
        const application = yield core_1.NotaddFactory.start(modules_1.ApplicationModule, {
            bodyParser: true,
            cors: true,
            logger: services_1.LogService,
        });
        application.use(express.static(process.cwd() + "/public/"));
        application.useGlobalPipes(new common_1.ValidationPipe());
        const options = new swagger_1.DocumentBuilder()
            .setTitle("Notadd")
            .setDescription("API document for Notadd.")
            .setVersion("2.0")
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(application, options);
        swagger_1.SwaggerModule.setup("/api-doc", application, document);
        const callback = () => {
            logger.log(`Graphql IDE Server on: ${address}/graphiql`);
            logger.log(`Swagger Server on: ${address}/api-doc`);
            logger.log(`Server on: ${address}`);
        };
        if (configuration.http.host && configuration.http.host !== "*") {
            yield application.listen(port, configuration.http.host, callback);
        }
        else {
            yield application.listen(port, callback);
        }
    });
}
exports.bootstrap = bootstrap;
