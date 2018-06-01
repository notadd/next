import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";
import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { FastifyAdapter } from "@nestjs/core";
import { NestFactoryStatic } from "@nestjs/core/nest-factory";

export class NotaddFactoryStatic extends NestFactoryStatic {
    public async startWithFastify(
        module: any,
        httpServer: FastifyAdapter,
        options: NestApplicationOptions,
    ): Promise<INestApplication> {
        console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);

        return super.create(module, httpServer, options);
    }

    public async startWithExpress(module: any, options: NestApplicationOptions): Promise<INestApplication> {
        console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

        `);

        return super.create(module, options);
    }
}

export const NotaddFactory = new NotaddFactoryStatic();
