import { MiddlewareConsumer, Module } from "@nestjs/common";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { SettingModule } from "@notadd/setting/modules/setting.module";
import { WorkflowExplorerService, WorkflowService } from "../services";

@Module({
    components: [
        MetadataScanner,
        WorkflowExplorerService,
        WorkflowService,
    ],
    exports: [
        WorkflowService,
    ],
    imports: [
        SettingModule,
    ],
})
export class WorkflowModule {
    /**
     * @param { WorkflowExplorerService } workflowExplorerService
     * @param { WorkflowService } workflowService
     */
    constructor(
        private readonly workflowExplorerService: WorkflowExplorerService,
        private readonly workflowService: WorkflowService,
    ) {
    }

    /**
     * @param { MiddlewareConsumer } consumer
     */
    async configure(consumer: MiddlewareConsumer) {
        this.workflowService.initialize(this.workflowExplorerService.explore());
        await this.workflowService.start();
    }
}
