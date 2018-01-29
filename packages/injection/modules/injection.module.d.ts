import { MiddlewaresConsumer } from "@nestjs/common";
export declare class InjectionModule {
    private logger;
    constructor();
    configure(consumer: MiddlewaresConsumer): void;
}
