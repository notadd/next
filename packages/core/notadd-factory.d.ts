import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";
import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { FastifyAdapter } from "@nestjs/core";
import { NestFactoryStatic } from "@nestjs/core/nest-factory";
export declare class NotaddFactoryStatic extends NestFactoryStatic {
    startWithFastify(module: any, httpServer: FastifyAdapter, options: NestApplicationOptions): Promise<INestApplication>;
    startWithExpress(module: any, options: NestApplicationOptions): Promise<INestApplication>;
}
export declare const NotaddFactory: NotaddFactoryStatic;
