import { DependenciesScanner } from "@nestjs/core/scanner";
import { INestApplication } from "@nestjs/common";
import { INestApplicationContext } from "@nestjs/common/interfaces/nest-application-context.interface";
import { INestMicroservice } from "@nestjs/common/interfaces/nest-microservice.interface";
import { InstanceLoader } from "@nestjs/core/injector/instance-loader";
import { MicroserviceConfiguration } from "@nestjs/common/interfaces/microservices/microservice-configuration.interface";
import { NestContainer } from "@nestjs/core/injector/container";
export declare class NotaddFactoryStatic {
    private container;
    private instanceLoader;
    private logger;
    private dependenciesScanner;
    create(module: any, express?: any): Promise<INestApplication>;
    createMicroservice(module: any, config?: MicroserviceConfiguration): Promise<INestMicroservice>;
    createApplicationContext(module: any): Promise<INestApplicationContext>;
    getContainer(): NestContainer;
    getLoader(): InstanceLoader;
    getScanner(): DependenciesScanner;
    private createApplicationInstance<T>(instance);
    private createProxy(target);
    private createExceptionProxy();
    private initialize(module);
}
export declare const NotaddFactory: NotaddFactoryStatic;
