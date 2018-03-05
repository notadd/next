"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var workflow_builder_1 = require("./workflow-builder");
var _ = require("underscore");
var wfes_registry = [];
var WorkflowRegistry = (function () {
    function WorkflowRegistry() {
    }
    WorkflowRegistry.prototype.getDefinition = function (id, version) {
        var item = _.findWhere(wfes_registry, { id: id, version: version });
        if (!item)
            throw "Workflow not registered";
        return item.defintion;
    };
    WorkflowRegistry.prototype.registerWorkflow = function (workflow) {
        var entry = new RegistryEntry();
        entry.id = workflow.id;
        entry.version = workflow.version;
        var builder = new workflow_builder_1.WorkflowBuilder();
        workflow.build(builder);
        entry.defintion = builder.build(workflow.id, workflow.version);
        wfes_registry.push(entry);
    };
    return WorkflowRegistry;
}());
WorkflowRegistry = __decorate([
    inversify_1.injectable()
], WorkflowRegistry);
exports.WorkflowRegistry = WorkflowRegistry;
var RegistryEntry = (function () {
    function RegistryEntry() {
    }
    return RegistryEntry;
}());
//# sourceMappingURL=workflow-registry.js.map