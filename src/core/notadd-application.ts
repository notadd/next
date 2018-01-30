import { NestApplication } from "@nestjs/core";

export class NotaddApplication extends NestApplication {
    public async init() {
        this.setupParserMiddlewares();

        await this.setupModules();
        await this.setupRouter();

        this.callInitHook();
        this.logger.log("Notadd application successfully started");
        this.isInitialized = true;
    }
}
