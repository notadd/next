import { MiddlewaresConsumer, Module } from "@nestjs/common";
import { configureWorkflow } from "workflow-es";

@Module({})
export class WorkflowModule {
    /**
     * @param { MiddlewaresConsumer } consumer
     */
    async configure(consumer: MiddlewaresConsumer) {
        const host = configureWorkflow().getHost();
        await host.start();
    }
}
