import "reflect-metadata";
import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
import { Logger } from "@nestjs/common";
export declare class ServerStarter {
    protected instance: INestApplication;
    protected logger: Logger;
    check(): void;
    start(): Promise<void>;
}
