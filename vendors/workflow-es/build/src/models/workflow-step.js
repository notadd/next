"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var execution_pipeline_directive_1 = require("./execution-pipeline-directive");
var WorkflowStepBase = (function () {
    function WorkflowStepBase() {
        this.outcomes = [];
        this.children = [];
    }
    WorkflowStepBase.prototype.initForExecution = function (executorResult, definition, workflow, executionPointer) {
        return execution_pipeline_directive_1.ExecutionPipelineDirective.Next;
    };
    WorkflowStepBase.prototype.beforeExecute = function (executorResult, context, executionPointer, body) {
        return execution_pipeline_directive_1.ExecutionPipelineDirective.Next;
    };
    WorkflowStepBase.prototype.afterExecute = function (executorResult, context, stepResult, executionPointer) {
    };
    return WorkflowStepBase;
}());
exports.WorkflowStepBase = WorkflowStepBase;
var WorkflowStep = (function (_super) {
    __extends(WorkflowStep, _super);
    function WorkflowStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = [];
        _this.outputs = [];
        return _this;
    }
    return WorkflowStep;
}(WorkflowStepBase));
exports.WorkflowStep = WorkflowStep;
//# sourceMappingURL=workflow-step.js.map