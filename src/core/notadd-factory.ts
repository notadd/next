import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { INestApplication } from '@nestjs/common';
import { NestFactoryStatic } from '@nestjs/core';

export class NotaddFactoryStatic extends NestFactoryStatic {
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
            | '_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
            | | | | (_) | || (_| | (_| | (_| |
            |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);

        return super.create(module, express);
    }
}

export const NotaddFactory = new NestFactoryStatic();
