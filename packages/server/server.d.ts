import { Logger } from "@nestjs/common";
import { INestApplication } from "@nestjs/common/interfaces/nest-application.interface";
export declare class ServerStarter {
    protected instance: INestApplication;
    protected logger: Logger;
    check(): void;
    start(): Promise<void>;
}
export declare const Server: ServerStarter;
