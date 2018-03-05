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
var models_1 = require("../models");
var SubscriptionStep = (function (_super) {
    __extends(SubscriptionStep, _super);
    function SubscriptionStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionStep.prototype.initForExecution = function (executorResult, definition, workflow, executionPointer) {
        if (!executionPointer.eventPublished) {
            if (this.eventKey != null)
                executionPointer.eventKey = this.eventKey(workflow.data);
            var effDate = new Date(2000, 1, 1);
            if (this.effectiveDate)
                effDate = this.effectiveDate(workflow.data);
            executionPointer.eventName = this.eventName;
            executionPointer.active = false;
            var sub = new models_1.EventSubscription();
            sub.workflowId = workflow.id;
            sub.stepId = executionPointer.stepId;
            sub.eventName = executionPointer.eventName;
            sub.eventKey = executionPointer.eventKey;
            sub.subscribeAsOf = effDate;
            executorResult.subscriptions.push(sub);
            return models_1.ExecutionPipelineDirective.Defer;
        }
        return models_1.ExecutionPipelineDirective.Next;
    };
    SubscriptionStep.prototype.beforeExecute = function (executorResult, context, executionPointer, body) {
        if (executionPointer.eventPublished) {
            var subBody = body;
            subBody.eventData = executionPointer.eventData;
        }
        return models_1.ExecutionPipelineDirective.Next;
    };
    return SubscriptionStep;
}(models_1.WorkflowStep));
exports.SubscriptionStep = SubscriptionStep;
//# sourceMappingURL=subscription-step.js.map