import { configureWorkflow, IWorkflowHost } from "workflow-es";
import { Injectable } from "@nestjs/common";
import { WorkflowMetadata } from "../metadatas";

@Injectable()
export class WorkflowService {
    private readonly host: IWorkflowHost;

    private workflows: Array<WorkflowMetadata> = [];

    constructor() {
        this.host = configureWorkflow().getHost();
    }

    /**
     * @returns { IWorkflowHost }
     */
    public getHost(): IWorkflowHost {
        return this.host;
    }

    public initialize(metadatas: Array<WorkflowMetadata>) {
        this.workflows = metadatas;
    }

    public async start() {
        this.workflows.forEach(workflow => {
            // this.host.registerWorkflow(workflow);
        });
        await this.host.start();
    }
}
