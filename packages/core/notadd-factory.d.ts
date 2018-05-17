import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";
import { NestFactoryStatic } from "@nestjs/core/nest-factory";
import { FastifyAdapter } from "@nestjs/core";
export declare class NotaddFactoryStatic extends NestFactoryStatic {
    start(module: any, httpServer: FastifyAdapter, options: NestApplicationOptions): Promise<INestApplication>;
}
export declare const NotaddFactory: NotaddFactoryStatic;
