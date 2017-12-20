import { INestApplication } from '@nestjs/common';
import { NestFactoryStatic } from '@nestjs/core';
export declare class NotaddFactoryStatic extends NestFactoryStatic {
    private _logger;
    constructor();
    /**
     * @param module
     * @param { any } express
     *
     * @returns { Promise<INestApplication> }
     */
    create(module: any, express?: any): Promise<INestApplication>;
}
export declare const NotaddFactory: NotaddFactoryStatic;
