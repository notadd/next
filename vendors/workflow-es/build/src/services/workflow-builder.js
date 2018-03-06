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
var abstractions_1 = require("../abstractions");
var models_1 = require("../models");
var primitives_1 = require("../primitives");
var WorkflowBuilder = (function () {
    function WorkflowBuilder() {
        this.steps = [];
        this.errorBehavior = models_1.WorkflowErrorHandling.Retry;
        this.retryInterval = (60 * 1000);
    }
    WorkflowBuilder.prototype.build = function (id, version) {
        var result = new models_1.WorkflowDefinition();
        result.id = id;
        result.version = version;
        result.steps = this.steps;
        result.errorBehavior = this.errorBehavior;
        result.retryInterval = this.retryInterval;
        return result;
    };
    WorkflowBuilder.prototype.addStep = function (step) {
        step.id = this.steps.length;
        this.steps.push(step);
    };
    WorkflowBuilder.prototype.startWith = function (body, setup) {
        if (setup === void 0) { setup = null; }
        var step = new models_1.WorkflowStep();
        step.body = body;
        var stepBuilder = new StepBuilder(this, step);
        //setup
        if (setup) {
            setup(stepBuilder);
        }
        this.addStep(step);
        return stepBuilder;
    };
    WorkflowBuilder.prototype.getUpstreamSteps = function (id) {
        return this.steps.filter(function (step) { return step.outcomes.filter(function (outcome) { return outcome.nextStep == id; }).length > 0; });
    };
    return WorkflowBuilder;
}());
exports.WorkflowBuilder = WorkflowBuilder;
var StepBuilder = (function () {
    function StepBuilder(workflowBuilder, step) {
        this.workflowBuilder = workflowBuilder;
        this.step = step;
    }
    StepBuilder.prototype.name = function (name) {
        this.step.name = name;
        return this;
    };
    StepBuilder.prototype.then = function (body, setup) {
        if (setup === void 0) { setup = null; }
        var newStep = new models_1.WorkflowStep();
        newStep.body = body;
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        //setup
        if (setup) {
            setup(stepBuilder);
        }
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.id;
        outcome.value = function (x) { return null; };
        this.step.outcomes.push(outcome);
        return stepBuilder;
    };
    StepBuilder.prototype.thenStep = function (newStep) {
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.step.id;
        outcome.value = function (x) { return null; };
        this.step.outcomes.push(outcome);
        return newStep;
    };
    StepBuilder.prototype.thenRun = function (step) {
        var newStep = new models_1.WorkflowStep();
        var bodyClass = (function (_super) {
            __extends(bodyClass, _super);
            function bodyClass() {
                return _super.call(this, step) || this;
            }
            return bodyClass;
        }(abstractions_1.InlineStepBody));
        ;
        newStep.body = bodyClass;
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.id;
        outcome.value = function (x) { return null; };
        this.step.outcomes.push(outcome);
        return stepBuilder;
    };
    StepBuilder.prototype.when = function (outcomeValue) {
        var outcome = new models_1.StepOutcome();
        outcome.value = outcomeValue;
        this.step.outcomes.push(outcome);
        var outcomeBuilder = new OutcomeBuilder(this.workflowBuilder, outcome);
        return outcomeBuilder;
    };
    StepBuilder.prototype.input = function (expression) {
        this.step.inputs.push(expression);
        return this;
    };
    StepBuilder.prototype.output = function (expression) {
        this.step.outputs.push(expression);
        return this;
    };
    StepBuilder.prototype.waitFor = function (eventName, eventKey, effectiveDate) {
        if (effectiveDate === void 0) { effectiveDate = function (x) { return new Date(); }; }
        var newStep = new primitives_1.SubscriptionStep();
        newStep.eventName = eventName;
        newStep.eventKey = eventKey;
        newStep.effectiveDate = effectiveDate;
        newStep.body = primitives_1.SubscriptionStepBody;
        this.workflowBuilder.addStep(newStep);
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.id;
        outcome.value = function (x) { return null; };
        this.step.outcomes.push(outcome);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        return stepBuilder;
    };
    StepBuilder.prototype.end = function (stepName) {
        var ancestor = this.iterateParents(this.step.id, stepName);
        if (!ancestor)
            throw "Parent step of name " + stepName + " not found";
        return new StepBuilder(this.workflowBuilder, ancestor);
    };
    StepBuilder.prototype.onError = function (behavior, retryInterval) {
        if (retryInterval === void 0) { retryInterval = null; }
        this.step.errorBehavior = behavior;
        this.step.retryInterval = retryInterval;
        return this;
    };
    StepBuilder.prototype.iterateParents = function (id, name) {
        var upstream = this.workflowBuilder.getUpstreamSteps(id);
        for (var _i = 0, upstream_1 = upstream; _i < upstream_1.length; _i++) {
            var parent = upstream_1[_i];
            if (parent.name == name)
                return parent;
        }
        for (var _a = 0, upstream_2 = upstream; _a < upstream_2.length; _a++) {
            var parent = upstream_2[_a];
            var result = this.iterateParents(parent.id, name);
            if (result)
                return result;
        }
        return null;
    };
    StepBuilder.prototype.foreach = function (expression) {
        var newStep = new models_1.WorkflowStep();
        newStep.body = primitives_1.Foreach;
        newStep.inputs.push(function (step, data) { return step.collection = expression(data); });
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.id;
        this.step.outcomes.push(outcome);
        return stepBuilder;
    };
    StepBuilder.prototype.while = function (expression) {
        var newStep = new models_1.WorkflowStep();
        newStep.body = primitives_1.While;
        newStep.inputs.push(function (step, data) { return step.condition = expression(data); });
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.id;
        this.step.outcomes.push(outcome);
        return stepBuilder;
    };
    StepBuilder.prototype.if = function (expression) {
        var newStep = new models_1.WorkflowStep();
        newStep.body = primitives_1.If;
        newStep.inputs.push(function (step, data) { return step.condition = expression(data); });
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        var outcome = new models_1.StepOutcome();
        outcome.nextStep = newStep.id;
        this.step.outcomes.push(outcome);
        return stepBuilder;
    };
    StepBuilder.prototype.do = function (builder) {
        builder(this.workflowBuilder);
        this.step.children.push(this.step.id + 1); //TODO: make more elegant                        
        return this;
    };
    return StepBuilder;
}());
exports.StepBuilder = StepBuilder;
var OutcomeBuilder = (function () {
    function OutcomeBuilder(workflowBuilder, outcome) {
        this.workflowBuilder = workflowBuilder;
        this.outcome = outcome;
    }
    OutcomeBuilder.prototype.then = function (body, setup) {
        if (setup === void 0) { setup = null; }
        var newStep = new models_1.WorkflowStep();
        newStep.body = body;
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        //setup
        if (setup) {
            setup(stepBuilder);
        }
        this.outcome.nextStep = newStep.id;
        return stepBuilder;
    };
    OutcomeBuilder.prototype.thenStep = function (newStep) {
        this.outcome.nextStep = newStep.step.id;
        return newStep;
    };
    OutcomeBuilder.prototype.thenRun = function (step) {
        var newStep = new models_1.WorkflowStep();
        var bodyClass = (function (_super) {
            __extends(bodyClass, _super);
            function bodyClass() {
                return _super.call(this, step) || this;
            }
            return bodyClass;
        }(abstractions_1.InlineStepBody));
        ;
        newStep.body = bodyClass;
        this.workflowBuilder.addStep(newStep);
        var stepBuilder = new StepBuilder(this.workflowBuilder, newStep);
        this.outcome.nextStep = newStep.id;
        return stepBuilder;
    };
    return OutcomeBuilder;
}());
exports.OutcomeBuilder = OutcomeBuilder;
//# sourceMappingURL=workflow-builder.js.map