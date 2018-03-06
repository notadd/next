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
var WorkflowQueueWorker = (function () {
    function WorkflowQueueWorker() {
    }
    WorkflowQueueWorker.prototype.start = function () {
        this.processTimer = setInterval(this.processQueue, 100, this);
    };
    WorkflowQueueWorker.prototype.stop = function () {
        this.logger.log("Stopping workflow queue worker...");
        if (this.processTimer)
            clearInterval(this.processTimer);
    };
    WorkflowQueueWorker.prototype.processQueue = function (self) {
        return __awaiter(this, void 0, void 0, function () {
            var workflowId_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, self.queueProvider.dequeueForProcessing(abstractions_1.QueueType.Workflow)];
                    case 1:
                        workflowId_1 = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!workflowId_1) return [3 /*break*/, 4];
                        self.logger.log("Dequeued workflow " + workflowId_1 + " for processing");
                        self.processWorkflow(self, workflowId_1)
                            .catch(function (err) {
                            self.logger.error("Error processing workflow", workflowId_1, err);
                        });
                        return [4 /*yield*/, self.queueProvider.dequeueForProcessing(abstractions_1.QueueType.Workflow)];
                    case 3:
                        workflowId_1 = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        self.logger.error("Error processing workflow queue: " + err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WorkflowQueueWorker.prototype.processWorkflow = function (self, workflowId) {
        return __awaiter(this, void 0, void 0, function () {
            var gotLock, complete, instance, result, _i, _a, sub, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 19, , 20]);
                        return [4 /*yield*/, self.lockProvider.aquireLock(workflowId)];
                    case 1:
                        gotLock = _b.sent();
                        if (!gotLock) return [3 /*break*/, 17];
                        complete = false;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 9, 16]);
                        return [4 /*yield*/, self.persistence.getWorkflowInstance(workflowId)];
                    case 3:
                        instance = _b.sent();
                        if (!instance)
                            throw "Workflow " + workflowId + " not found";
                        if (!(instance.status == models_1.WorkflowStatus.Runnable)) return [3 /*break*/, 8];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, , 6, 8]);
                        return [4 /*yield*/, self.executor.execute(instance)];
                    case 5:
                        result = _b.sent();
                        complete = true;
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, self.persistence.persistWorkflow(instance)];
                    case 7:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 8: return [3 /*break*/, 16];
                    case 9: return [4 /*yield*/, self.lockProvider.releaseLock(workflowId)];
                    case 10:
                        _b.sent();
                        if (!complete) return [3 /*break*/, 15];
                        _i = 0, _a = result.subscriptions;
                        _b.label = 11;
                    case 11:
                        if (!(_i < _a.length)) return [3 /*break*/, 14];
                        sub = _a[_i];
                        return [4 /*yield*/, self.subscribeEvent(self, sub)];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 11];
                    case 14:
                        if ((instance.status == models_1.WorkflowStatus.Runnable) && (instance.nextExecution !== null)) {
                            if (instance.nextExecution < Date.now()) {
                                self.queueProvider.queueForProcessing(workflowId, abstractions_1.QueueType.Workflow);
                            }
                        }
                        _b.label = 15;
                    case 15: return [7 /*endfinally*/];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        self.logger.log("Workflow locked: " + workflowId);
                        _b.label = 18;
                    case 18: return [3 /*break*/, 20];
                    case 19:
                        err_2 = _b.sent();
                        self.logger.error("Error processing workflow: " + err_2);
                        return [3 /*break*/, 20];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    WorkflowQueueWorker.prototype.subscribeEvent = function (self, subscription) {
        return __awaiter(this, void 0, void 0, function () {
            var events, _i, events_1, evt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //TODO: move to own class       
                    return [4 /*yield*/, self.persistence.createEventSubscription(subscription)];
                    case 1:
                        //TODO: move to own class       
                        _a.sent();
                        return [4 /*yield*/, self.persistence.getEvents(subscription.eventName, subscription.eventKey, subscription.subscribeAsOf)];
                    case 2:
                        events = _a.sent();
                        _i = 0, events_1 = events;
                        _a.label = 3;
                    case 3:
                        if (!(_i < events_1.length)) return [3 /*break*/, 6];
                        evt = events_1[_i];
                        return [4 /*yield*/, self.persistence.markEventUnprocessed(evt)];
                    case 4:
                        _a.sent();
                        self.queueProvider.queueForProcessing(evt, abstractions_1.QueueType.Event);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return WorkflowQueueWorker;
}());
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IWorkflowExecutor),
    __metadata("design:type", Object)
], WorkflowQueueWorker.prototype, "executor", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IPersistenceProvider),
    __metadata("design:type", Object)
], WorkflowQueueWorker.prototype, "persistence", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IDistributedLockProvider),
    __metadata("design:type", Object)
], WorkflowQueueWorker.prototype, "lockProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IQueueProvider),
    __metadata("design:type", Object)
], WorkflowQueueWorker.prototype, "queueProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.ILogger),
    __metadata("design:type", Object)
], WorkflowQueueWorker.prototype, "logger", void 0);
WorkflowQueueWorker = __decorate([
    inversify_1.injectable()
], WorkflowQueueWorker);
exports.WorkflowQueueWorker = WorkflowQueueWorker;
//# sourceMappingURL=workflow-queue-worker.js.map