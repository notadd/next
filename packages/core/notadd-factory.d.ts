import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";
import { NestFactoryStatic } from "@nestjs/core/nest-factory";
export declare class NotaddFactoryStatic extends NestFactoryStatic {
    start(module: any, options: NestApplicationOptions): Promise<INestApplication>;
}
export declare const notaddFactory: NotaddFactoryStatic;
