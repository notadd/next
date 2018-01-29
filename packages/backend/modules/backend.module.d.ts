import { MiddlewaresConsumer } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
export declare class BackendModule implements OnModuleInit {
    private logger;
    constructor();
    configure(consumer: MiddlewaresConsumer): void;
    onModuleInit(): any;
}
