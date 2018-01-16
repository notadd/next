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
const packages_1 = require("nestjs-flub/packages");
const common_1 = require("@nestjs/common");
const core_1 = require("@notadd/core");
const cross = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
};
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const index = process.argv.indexOf('--port');
        const port = index > -1 ? parseInt(process.argv[index + 1]) : 3000;
        const address = `http://${ip.address()}:${port}`;
        const application = yield core_1.NotaddFactory.create(modules_1.ApplicationModule);
        application.use(express.static(process.cwd() + '/public/'));
        application.use(cross);
        application.useGlobalFilters(new packages_1.FlubErrorHandler());
        application.useGlobalPipes(new common_1.ValidationPipe());
        const logger = new common_1.Logger('NotaddFactory', true);
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Notadd')
            .setDescription('API document for Notadd.')
            .setVersion('2.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(application, options);
        swagger_1.SwaggerModule.setup('/api-doc', application, document);
        yield application.listen(port, () => {
            logger.log(`Graphql IDE Server on: ${address}/graphiql`);
            logger.log(`Swagger Server on: ${address}/api-doc`);
            logger.log(`Server on: ${address}`);
        });
    });
}
exports.bootstrap = bootstrap;
__export(require("./modules/application.module"));
