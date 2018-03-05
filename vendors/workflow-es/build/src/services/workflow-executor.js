"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var abstractions_1 = require("../abstractions");
var models_1 = require("../models");
var _ = require("underscore");
var WorkflowExecutor = (function () {
    function WorkflowExecutor() {
    }
    WorkflowExecutor.prototype.execute = function (instance) {
        return __awaiter(this, void 0, void 0, function () {
            var self, result, exePointers, def, _i, exePointers_1, pointer, step, stepContext, body, _a, _b, input, stepResult, _c, _d, output, err_1, perr;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        self = this;
                        result = new models_1.WorkflowExecutorResult();
                        self.logger.log("Execute workflow: " + instance.id);
                        exePointers = _.where(instance.executionPointers, { active: true });
                        def = self.registry.getDefinition(instance.workflowDefinitionId, instance.version);
                        if (!def) {
                            throw "No workflow definition in registry for " + instance.workflowDefinitionId + ":" + instance.version;
                        }
                        _i = 0, exePointers_1 = exePointers;
                        _e.label = 1;
                    case 1:
                        if (!(_i < exePointers_1.length)) return [3 /*break*/, 8];
                        pointer = exePointers_1[_i];
                        step = _.findWhere(def.steps, { id: pointer.stepId });
                        if (!step) return [3 /*break*/, 6];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        switch (step.initForExecution(result, def, instance, pointer)) {
                            case models_1.ExecutionPipelineDirective.Defer:
                                return [3 /*break*/, 7];
                            case models_1.ExecutionPipelineDirective.EndWorkflow:
                                instance.status = models_1.WorkflowStatus.Complete;
                                instance.completeTime = new Date();
                                return [3 /*break*/, 7];
                        }
                        if (!pointer.startTime)
                            pointer.startTime = new Date();
                        stepContext = new models_1.StepExecutionContext();
                        stepContext.persistenceData = pointer.persistenceData;
                        stepContext.step = step;
                        stepContext.workflow = instance;
                        stepContext.item = pointer.contextItem;
                        stepContext.pointer = pointer;
                        body = new step.body();
                        //inputs
                        for (_a = 0, _b = step.inputs; _a < _b.length; _a++) {
                            input = _b[_a];
                            input(body, instance.data);
                        }
                        switch (step.beforeExecute(result, stepContext, pointer, body)) {
                            case models_1.ExecutionPipelineDirective.Defer:
                                return [3 /*break*/, 7];
                            case models_1.ExecutionPipelineDirective.EndWorkflow:
                                instance.status = models_1.WorkflowStatus.Complete;
                                instance.completeTime = new Date();
                                return [3 /*break*/, 7];
                        }
                        return [4 /*yield*/, body.run(stepContext)];
                    case 3:
                        stepResult = _e.sent();
                        //outputs
                        for (_c = 0, _d = step.outputs; _c < _d.length; _c++) {
                            output = _d[_c];
                            output(body, instance.data);
                        }
                        this.processExecutionResult(stepResult, pointer, instance, step);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _e.sent();
                        self.logger.error("Error executing workflow %s on step %s - %o", instance.id, pointer.stepId, err_1);
                        switch (step.errorBehavior) {
                            case models_1.WorkflowErrorHandling.Retry:
                                pointer.sleepUntil = (Date.now() + step.retryInterval);
                                break;
                            case models_1.WorkflowErrorHandling.Suspend:
                                instance.status = models_1.WorkflowStatus.Suspended;
                                break;
                            case models_1.WorkflowErrorHandling.Terminate:
                                instance.status = models_1.WorkflowStatus.Terminated;
                                break;
                            default:
                                pointer.sleepUntil = (Date.now() + 60000);
                                break;
                        }
                        pointer.retryCount++;
                        perr = new models_1.ExecutionError();
                        perr.message = err_1.message;
                        perr.errorTime = new Date();
                        result.errors.push(perr);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        self.logger.error("Could not find step on workflow %s %s", instance.id, pointer.stepId);
                        pointer.sleepUntil = (Date.now() + 60000); //todo: make configurable
                        _e.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        self.determineNextExecutionTime(instance);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    WorkflowExecutor.prototype.processExecutionResult = function (stepResult, pointer, instance, step) {
        pointer.persistenceData = stepResult.persistenceData;
        pointer.outcome = stepResult.outcomeValue;
        if (stepResult.sleep)
            pointer.sleepUntil = stepResult.sleep.getTime();
        if (stepResult.proceed) {
            pointer.active = false;
            pointer.endTime = new Date();
            for (var _i = 0, _a = step.outcomes.filter(function (x) { return (x.value(instance.data) == stepResult.outcomeValue) || (x.value(instance.data) == null); }); _i < _a.length; _i++) {
                var outcome = _a[_i];
                var newPointer = new models_1.ExecutionPointer();
                newPointer.active = true;
                newPointer.predecessorId = pointer.id;
                newPointer.stepId = outcome.nextStep;
                newPointer.id = (Math.random() * 0x10000000000000).toString(16);
                newPointer.contextItem = pointer.contextItem;
                instance.executionPointers.push(newPointer);
            }
        }
        else {
            for (var _b = 0, _c = stepResult.branchValues; _b < _c.length; _b++) {
                var branch = _c[_b];
                for (var _d = 0, _e = step.children; _d < _e.length; _d++) {
                    var childDefId = _e[_d];
                    var childPointer = new models_1.ExecutionPointer();
                    childPointer.id = (Math.random() * 0x10000000000000).toString(16);
                    childPointer.predecessorId = pointer.id;
                    childPointer.stepId = childDefId;
                    childPointer.active = true;
                    childPointer.contextItem = branch;
                    instance.executionPointers.push(childPointer);
                    pointer.children.push(childPointer.id);
                }
            }
        }
    };
    WorkflowExecutor.prototype.determineNextExecutionTime = function (instance) {
        var _this = this;
        instance.nextExecution = null;
        if (instance.status == models_1.WorkflowStatus.Complete)
            return;
        for (var _i = 0, _a = instance.executionPointers.filter(function (x) { return x.active && x.children.length == 0; }); _i < _a.length; _i++) {
            var pointer = _a[_i];
            if (!pointer.sleepUntil) {
                instance.nextExecution = 0;
                return;
            }
            instance.nextExecution = Math.min(pointer.sleepUntil, instance.nextExecution ? instance.nextExecution : pointer.sleepUntil);
        }
        if (instance.nextExecution === null) {
            var _loop_1 = function (pointer) {
                if (instance.executionPointers.filter(function (x) { return x.children.includes(pointer.id); }).every(function (x) { return _this.isBranchComplete(instance.executionPointers, x.id); })) {
                    if (!pointer.sleepUntil) {
                        instance.nextExecution = 0;
                        return { value: void 0 };
                    }
                    instance.nextExecution = Math.min(pointer.sleepUntil, instance.nextExecution ? instance.nextExecution : pointer.sleepUntil);
                }
            };
            for (var _b = 0, _c = instance.executionPointers.filter(function (x) { return x.active && x.children.length > 0; }); _b < _c.length; _b++) {
                var pointer = _c[_b];
                var state_1 = _loop_1(pointer);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        if ((instance.nextExecution === null) && (instance.executionPointers.every(function (x) { return Boolean(x.endTime); }))) {
            instance.completeTime = new Date();
            instance.status = models_1.WorkflowStatus.Complete;
        }
    };
    WorkflowExecutor.prototype.isBranchComplete = function (pointers, rootId) {
        var root = pointers.find(function (x) { return x.id == rootId; });
        if (!root.endTime)
            return false;
        var list = pointers.filter(function (x) { return x.predecessorId == rootId; });
        var result = true;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            result = result && this.isBranchComplete(pointers, item.id);
        }
        return result;
    };
    return WorkflowExecutor;
}());
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IWorkflowRegistry),
    __metadata("design:type", Object)
], WorkflowExecutor.prototype, "registry", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.ILogger),
    __metadata("design:type", Object)
], WorkflowExecutor.prototype, "logger", void 0);
WorkflowExecutor = __decorate([
    inversify_1.injectable()
], WorkflowExecutor);
exports.WorkflowExecutor = WorkflowExecutor;
//# sourceMappingURL=workflow-executor.js.map