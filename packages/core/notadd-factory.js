"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const optional = require("optional");
const express_adapter_1 = require("@nestjs/core/adapters/express-adapter");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const container_1 = require("@nestjs/core/injector/container");
const instance_loader_1 = require("@nestjs/core/injector/instance-loader");
const scanner_1 = require("@nestjs/core/scanner");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const microservices_package_not_found_exception_1 = require("@nestjs/core/errors/exceptions/microservices-package-not-found.exception");
const exceptions_zone_1 = require("@nestjs/core/errors/exceptions-zone");
const shared_utils_1 = require("@nestjs/common/utils/shared.utils");
const notadd_application_1 = require("./notadd-application");
const { NestMicroservice } = optional("@nestjs/microservices/nest-microservice") || {};
class NotaddFactoryStatic {
    constructor() {
        this.container = new container_1.NestContainer();
        this.instanceLoader = new instance_loader_1.InstanceLoader(this.container);
        this.logger = new common_1.Logger('NotaddFactory', true);
        this.dependenciesScanner = new scanner_1.DependenciesScanner(this.container, new metadata_scanner_1.MetadataScanner());
    }
    create(module, express = express_adapter_1.ExpressAdapter.create()) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);
            this.logger.log("Starting Notadd...");
            yield this.initialize(module);
            let instance = this.createApplicationInstance(new notadd_application_1.NotaddApplication(this.container, express));
            this.logger.log("Notadd successfully started");
            return instance;
        });
    }
    createMicroservice(module, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!NestMicroservice) {
                throw new microservices_package_not_found_exception_1.MicroservicesPackageNotFoundException();
            }
            yield this.initialize(module);
            return this.createApplicationInstance(new NestMicroservice(this.container, config));
        });
    }
    createApplicationContext(module) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initialize(module);
            const modules = this.container.getModules().values();
            const root = modules.next().value;
            return this.createApplicationInstance(new core_1.NestApplicationContext(this.container, [], root));
        });
    }
    getContainer() {
        return this.container;
    }
    getLoader() {
        return this.instanceLoader;
    }
    getScanner() {
        return this.dependenciesScanner;
    }
    createApplicationInstance(instance) {
        return this.createProxy(instance);
    }
    createProxy(target) {
        const proxy = this.createExceptionProxy();
        return new Proxy(target, {
            get: proxy,
            set: proxy,
        });
    }
    createExceptionProxy() {
        return (receiver, prop) => {
            if (!(prop in receiver))
                return;
            if (shared_utils_1.isFunction(receiver[prop])) {
                return (...args) => {
                    let result;
                    exceptions_zone_1.ExceptionsZone.run(() => {
                        result = receiver[prop](...args);
                    });
                    return result;
                };
            }
            return receiver[prop];
        };
    }
    initialize(module) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log("Starting Notadd application...");
                yield exceptions_zone_1.ExceptionsZone.asyncRun(() => __awaiter(this, void 0, void 0, function* () {
                    this.dependenciesScanner.scan(module);
                    yield this.instanceLoader.createInstancesOfDependencies();
                }));
            }
            catch (e) {
                process.abort();
            }
        });
    }
}
exports.NotaddFactoryStatic = NotaddFactoryStatic;
exports.NotaddFactory = new NotaddFactoryStatic();
