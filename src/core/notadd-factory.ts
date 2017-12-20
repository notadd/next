import { ExpressAdapter } from '@nestjs/core/adapters/express-adapter';
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactoryStatic } from '@nestjs/core';

export class NotaddFactoryStatic extends NestFactoryStatic {
    private _logger: Logger;

    constructor() {
        super();
        this._logger = new Logger('NotaddFactory', true);
    }

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
        this._logger.log('Starting Notadd...');
        let created = await super.create(module, express);
        this._logger.log('Notadd successfully started');

        return created;
    }
}

export const NotaddFactory = new NotaddFactoryStatic();
