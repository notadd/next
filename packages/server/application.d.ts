import { Logger } from "@nestjs/common";
import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
export declare class ApplicationStarter {
    protected instance: INestApplication;
    protected logger: Logger;
    check(): void;
    start(): Promise<void>;
}
export declare const Application: ApplicationStarter;
