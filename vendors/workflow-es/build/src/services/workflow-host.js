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
var models_1 = require("../models");
var abstractions_1 = require("../abstractions");
var single_node_queue_provider_1 = require("./single-node-queue-provider");
var WorkflowHost = (function () {
    function WorkflowHost() {
        this.queueProvider = new single_node_queue_provider_1.SingleNodeQueueProvider();
    }
    WorkflowHost.prototype.start = function () {
        this.logger.log("Starting workflow host...");
        for (var _i = 0, _a = this.workers; _i < _a.length; _i++) {
            var worker = _a[_i];
            worker.start();
        }
        this.registerCleanCallbacks();
        return Promise.resolve(undefined);
    };
    WorkflowHost.prototype.stop = function () {
        this.logger.log("Stopping workflow host...");
        for (var _i = 0, _a = this.workers; _i < _a.length; _i++) {
            var worker = _a[_i];
            worker.stop();
        }
    };
    WorkflowHost.prototype.startWorkflow = function (id, version, data) {
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var self, def, wf, ep, workflowId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        def = self.registry.getDefinition(id, version);
                        wf = new models_1.WorkflowInstance();
                        wf.data = data;
                        wf.description = def.description;
                        wf.workflowDefinitionId = def.id;
                        wf.version = def.version;
                        wf.nextExecution = 0;
                        wf.createTime = new Date();
                        wf.status = models_1.WorkflowStatus.Runnable;
                        ep = new models_1.ExecutionPointer();
                        ep.active = true;
                        ep.stepId = 0;
                        ep.id = (Math.random() * 0x10000000000000).toString(16);
                        wf.executionPointers.push(ep);
                        return [4 /*yield*/, self.persistence.createNewWorkflow(wf)];
                    case 1:
                        workflowId = _a.sent();
                        self.queueProvider.queueForProcessing(workflowId, abstractions_1.QueueType.Workflow);
                        return [2 /*return*/, workflowId];
                }
            });
        });
    };
    WorkflowHost.prototype.registerWorkflow = function (workflow) {
        this.registry.registerWorkflow(new workflow());
    };
    WorkflowHost.prototype.publishEvent = function (eventName, eventKey, eventData, eventTime) {
        return __awaiter(this, void 0, void 0, function () {
            var evt, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //todo: check host status        
                        this.logger.info("Publishing event %s %s", eventName, eventKey);
                        evt = new models_1.Event();
                        evt.eventData = eventData;
                        evt.eventKey = eventKey;
                        evt.eventName = eventName;
                        evt.eventTime = eventTime;
                        evt.isProcessed = false;
                        return [4 /*yield*/, this.persistence.createEvent(evt)];
                    case 1:
                        id = _a.sent();
                        this.queueProvider.queueForProcessing(id, abstractions_1.QueueType.Event);
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkflowHost.prototype.suspendWorkflow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var self, result, gotLock, wf, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        result = false;
                        return [4 /*yield*/, self.lockProvider.aquireLock(id)];
                    case 2:
                        gotLock = _a.sent();
                        if (!gotLock) return [3 /*break*/, 8];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, , 7, 8]);
                        return [4 /*yield*/, self.persistence.getWorkflowInstance(id)];
                    case 4:
                        wf = _a.sent();
                        if (!(wf.status == models_1.WorkflowStatus.Runnable)) return [3 /*break*/, 6];
                        wf.status = models_1.WorkflowStatus.Suspended;
                        return [4 /*yield*/, self.persistence.persistWorkflow(wf)];
                    case 5:
                        _a.sent();
                        result = true;
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        self.lockProvider.releaseLock(id);
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, result];
                    case 9:
                        err_1 = _a.sent();
                        self.logger.error("Error suspending workflow: " + err_1);
                        return [2 /*return*/, false];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    WorkflowHost.prototype.resumeWorkflow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var self, result, gotLock, wf, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        result = false;
                        return [4 /*yield*/, self.lockProvider.aquireLock(id)];
                    case 2:
                        gotLock = _a.sent();
                        if (!gotLock) return [3 /*break*/, 8];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, , 7, 8]);
                        return [4 /*yield*/, self.persistence.getWorkflowInstance(id)];
                    case 4:
                        wf = _a.sent();
                        if (!(wf.status == models_1.WorkflowStatus.Suspended)) return [3 /*break*/, 6];
                        wf.status = models_1.WorkflowStatus.Runnable;
                        return [4 /*yield*/, self.persistence.persistWorkflow(wf)];
                    case 5:
                        _a.sent();
                        result = true;
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        self.lockProvider.releaseLock(id);
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, result];
                    case 9:
                        err_2 = _a.sent();
                        self.logger.error("Error resuming workflow: " + err_2);
                        return [2 /*return*/, false];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    WorkflowHost.prototype.terminateWorkflow = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var self, result, gotLock, wf, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        result = false;
                        return [4 /*yield*/, self.lockProvider.aquireLock(id)];
                    case 2:
                        gotLock = _a.sent();
                        if (!gotLock) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, , 6, 7]);
                        return [4 /*yield*/, self.persistence.getWorkflowInstance(id)];
                    case 4:
                        wf = _a.sent();
                        wf.status = models_1.WorkflowStatus.Terminated;
                        return [4 /*yield*/, self.persistence.persistWorkflow(wf)];
                    case 5:
                        _a.sent();
                        result = true;
                        return [3 /*break*/, 7];
                    case 6:
                        self.lockProvider.releaseLock(id);
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, result];
                    case 8:
                        err_3 = _a.sent();
                        self.logger.error("Error terminating workflow: " + err_3);
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    WorkflowHost.prototype.registerCleanCallbacks = function () {
        var self = this;
        if (typeof process !== 'undefined' && process) {
            process.on('SIGINT', function () {
                self.stop();
            });
        }
    };
    return WorkflowHost;
}());
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IWorkflowRegistry),
    __metadata("design:type", Object)
], WorkflowHost.prototype, "registry", void 0);
__decorate([
    inversify_1.multiInject(abstractions_1.TYPES.IBackgroundWorker),
    __metadata("design:type", Array)
], WorkflowHost.prototype, "workers", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IPersistenceProvider),
    __metadata("design:type", Object)
], WorkflowHost.prototype, "persistence", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IDistributedLockProvider),
    __metadata("design:type", Object)
], WorkflowHost.prototype, "lockProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IQueueProvider),
    __metadata("design:type", Object)
], WorkflowHost.prototype, "queueProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.ILogger),
    __metadata("design:type", Object)
], WorkflowHost.prototype, "logger", void 0);
WorkflowHost = __decorate([
    inversify_1.injectable()
], WorkflowHost);
exports.WorkflowHost = WorkflowHost;
//# sourceMappingURL=workflow-host.js.map