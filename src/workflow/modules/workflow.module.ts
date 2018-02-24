import { MiddlewaresConsumer, Module } from "@nestjs/common";
import { WorkflowService } from "../services";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { WorkflowExplorerService } from "../services/workflow-explorer.service";
import { SettingModule } from "@notadd/setting/modules/setting.module";

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
     * @param { MiddlewaresConsumer } consumer
     */
    async configure(consumer: MiddlewaresConsumer) {
        this.workflowService.initialize(this.workflowExplorerService.explore());
        await this.workflowService.start();
    }
}
