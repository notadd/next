"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var abstractions_1 = require("./abstractions");
var services_1 = require("./services");
var WorkflowConfig = (function () {
    function WorkflowConfig(container) {
        this.container = container;
    }
    WorkflowConfig.prototype.getContainer = function () {
        return this.container;
    };
    WorkflowConfig.prototype.useLogger = function (service) {
        this.container.rebind(abstractions_1.TYPES.ILogger).toConstantValue(service);
    };
    WorkflowConfig.prototype.usePersistence = function (service) {
        this.container.rebind(abstractions_1.TYPES.IPersistenceProvider).toConstantValue(service);
    };
    WorkflowConfig.prototype.useQueueManager = function (service) {
        this.container.rebind(abstractions_1.TYPES.IQueueProvider).toConstantValue(service);
    };
    WorkflowConfig.prototype.useLockManager = function (service) {
        this.container.rebind(abstractions_1.TYPES.IDistributedLockProvider).toConstantValue(service);
    };
    WorkflowConfig.prototype.getHost = function () {
        return this.container.get(abstractions_1.TYPES.IWorkflowHost);
    };
    return WorkflowConfig;
}());
exports.WorkflowConfig = WorkflowConfig;
function configureWorkflow() {
    var workflowModule = new inversify_1.ContainerModule(function (bind, unbind) {
        bind(abstractions_1.TYPES.ILogger).to(services_1.NullLogger);
        bind(abstractions_1.TYPES.IQueueProvider).to(services_1.SingleNodeQueueProvider).inSingletonScope();
        bind(abstractions_1.TYPES.IPersistenceProvider).to(services_1.MemoryPersistenceProvider).inSingletonScope();
        bind(abstractions_1.TYPES.IDistributedLockProvider).to(services_1.SingleNodeLockProvider).inSingletonScope();
        bind(abstractions_1.TYPES.IWorkflowRegistry).to(services_1.WorkflowRegistry).inSingletonScope();
        bind(abstractions_1.TYPES.IWorkflowExecutor).to(services_1.WorkflowExecutor);
        bind(abstractions_1.TYPES.IBackgroundWorker).to(services_1.WorkflowQueueWorker);
        bind(abstractions_1.TYPES.IBackgroundWorker).to(services_1.EventQueueWorker);
        bind(abstractions_1.TYPES.IBackgroundWorker).to(services_1.PollWorker);
        bind(abstractions_1.TYPES.IWorkflowHost).to(services_1.WorkflowHost).inSingletonScope();
    });
    var container = new inversify_1.Container();
    container.load(workflowModule);
    var config = new WorkflowConfig(container);
    return config;
}
exports.configureWorkflow = configureWorkflow;
//# sourceMappingURL=config.js.map