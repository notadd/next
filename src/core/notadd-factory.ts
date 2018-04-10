import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";
import { NestFactoryStatic } from "@nestjs/core/nest-factory";

export class NotaddFactoryStatic extends NestFactoryStatic {
    public async start(module: any, options: NestApplicationOptions): Promise<INestApplication> {
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

export const notaddFactory = new NotaddFactoryStatic();
