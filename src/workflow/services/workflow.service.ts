import { Component } from "@nestjs/common";
import { configureWorkflow, IWorkflowHost } from "workflow-es";

@Component()
export class WorkflowService {
    private readonly host: IWorkflowHost;

    constructor() {
        this.host = configureWorkflow().getHost();
    }

    /**
     * @returns { IWorkflowHost }
     */
    public getHost(): IWorkflowHost {
        return this.host;
    }

    public async start() {
        await this.host.start();
    }
}
