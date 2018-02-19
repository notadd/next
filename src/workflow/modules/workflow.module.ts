import { MiddlewaresConsumer, Module } from "@nestjs/common";
import { WorkflowService } from "../services";

@Module({
    components: [
        WorkflowService,
    ],
    exports: [
        WorkflowService,
    ],
})
export class WorkflowModule {
    /**
     * @param { WorkflowService } workflowService
     */
    constructor(private readonly workflowService: WorkflowService) {
    }

    /**
     * @param { MiddlewaresConsumer } consumer
     */
    async configure(consumer: MiddlewaresConsumer) {
        await this.workflowService.start();
    }
}
