import { Component } from "@nestjs/common";
import { configureWorkflow } from "workflow-es";
import { IWorkflowHost } from "workflow-es/src/abstractions";

@Component()
export class WorkflowService {
    private readonly host: IWorkflowHost;

    constructor() {
        this.host = configureWorkflow().getHost();
    }

    public async start() {
        await this.start();
    }
}
