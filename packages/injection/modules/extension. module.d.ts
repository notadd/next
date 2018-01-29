import { MiddlewaresConsumer } from "@nestjs/common";
export declare class ExtensionModule {
    private logger;
    constructor();
    configure(consumer: MiddlewaresConsumer): void;
}
