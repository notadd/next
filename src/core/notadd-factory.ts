import * as optional from 'optional';
import { DependenciesScanner } from "@nestjs/core/scanner";
import { ExceptionsZone } from "@nestjs/core/errors/exceptions-zone";
import { ExpressAdapter } from "@nestjs/core/adapters/express-adapter";
import { INestApplication, Logger } from "@nestjs/common";
import { INestApplicationContext } from "@nestjs/common/interfaces/nest-application-context.interface";
import { INestMicroservice } from "@nestjs/common/interfaces/nest-microservice.interface";
import { InstanceLoader } from "@nestjs/core/injector/instance-loader";
import { isFunction } from "@nestjs/common/utils/shared.utils";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { MicroserviceConfiguration } from "@nestjs/common/interfaces/microservices/microservice-configuration.interface";
import { MicroservicesPackageNotFoundException } from "@nestjs/core/errors/exceptions/microservices-package-not-found.exception";
import { NestApplicationContext } from "@nestjs/core";
import { NestContainer } from "@nestjs/core/injector/container";
import { NotaddApplication } from "./notadd-application";

const { NestMicroservice } = optional("@nestjs/microservices/nest-microservice") || ({} as any);

export class NotaddFactoryStatic {
    private container = new NestContainer();

    private instanceLoader = new InstanceLoader(this.container);

    private logger = new Logger('NotaddFactory', true);

    private dependenciesScanner = new DependenciesScanner(this.container, new MetadataScanner());

    /**
     * @param module
     * @param { any } express
     *
     * @returns { Promise<INestApplication> }
     */
    public async create(module, express = ExpressAdapter.create()): Promise<INestApplication> {
        console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);
        this.logger.log("Starting Notadd...");
        await this.initialize(module);
        let instance = this.createApplicationInstance<NotaddApplication>(
            new NotaddApplication(this.container, express),
        );

        this.logger.log("Notadd successfully started");

        return instance;
    }

    /**
     * @param module
     * @param { MicroserviceConfiguration } config
     *
     * @returns { Promise<INestMicroservice> }
     */
    public async createMicroservice(module, config?: MicroserviceConfiguration): Promise<INestMicroservice> {
        if (!NestMicroservice) {
            throw new MicroservicesPackageNotFoundException();
        }

        await this.initialize(module);
        return this.createApplicationInstance<INestMicroservice>(
            new NestMicroservice(this.container, config as any),
        );
    }

    /**
     * @param module
     *
     * @returns { Promise<INestApplicationContext> }
     */
    public async createApplicationContext(module,): Promise<INestApplicationContext> {
        await this.initialize(module);

        const modules = this.container.getModules().values();
        const root = modules.next().value;
        return this.createApplicationInstance<INestApplicationContext>(
            new NestApplicationContext(this.container, [], root),
        );
    }

    /**
     * @returns { NestContainer }
     */
    public getContainer(): NestContainer {
        return this.container;
    }

    /**
     * @returns { InstanceLoader }
     */
    public getLoader(): InstanceLoader {
        return this.instanceLoader;
    }

    /**
     * @returns { DependenciesScanner }
     */
    public getScanner(): DependenciesScanner {
        return this.dependenciesScanner;
    }

    private createApplicationInstance<T>(instance: T) {
        return this.createProxy(instance);
    }

    private createProxy(target) {
        const proxy = this.createExceptionProxy();
        return new Proxy(target, {
            get: proxy,
            set: proxy,
        });
    }

    private createExceptionProxy() {
        return (receiver: any, prop: any) => {
            if (!(prop in receiver)) return;

            if (isFunction(receiver[ prop ])) {
                return (...args) => {
                    let result;
                    ExceptionsZone.run(() => {
                        result = receiver[ prop ](...args);
                    });
                    return result;
                };
            }
            return receiver[ prop ];
        };
    }

    private async initialize(module) {
        try {
            this.logger.log("Starting Notadd application...");
            await ExceptionsZone.asyncRun(async () => {
                this.dependenciesScanner.scan(module);
                await this.instanceLoader.createInstancesOfDependencies();
            });
        } catch (e) {
            process.abort();
        }
    }
}

export const NotaddFactory = new NotaddFactoryStatic();
