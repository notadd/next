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
var EventQueueWorker = (function () {
    function EventQueueWorker() {
    }
    EventQueueWorker.prototype.start = function () {
        this.processTimer = setInterval(this.processQueue, 500, this);
    };
    EventQueueWorker.prototype.stop = function () {
        this.logger.log("Stopping event queue worker...");
        if (this.processTimer)
            clearInterval(this.processTimer);
    };
    EventQueueWorker.prototype.processQueue = function (self) {
        return __awaiter(this, void 0, void 0, function () {
            var eventId_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, self.queueProvider.dequeueForProcessing(abstractions_1.QueueType.Event)];
                    case 1:
                        eventId_1 = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!eventId_1) return [3 /*break*/, 4];
                        self.logger.log("Dequeued event " + eventId_1 + " for processing");
                        self.processEvent(self, eventId_1)
                            .catch(function (err) {
                            self.logger.error("Error processing event", eventId_1, err);
                        });
                        return [4 /*yield*/, self.queueProvider.dequeueForProcessing(abstractions_1.QueueType.Event)];
                    case 3:
                        eventId_1 = _a.sent();
                        return [3 /*break*/, 2];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        self.logger.error("Error processing event queue: " + err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    EventQueueWorker.prototype.processEvent = function (self, eventId) {
        return __awaiter(this, void 0, void 0, function () {
            var gotLock, evt, subs, success, _i, subs_1, sub, _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 17, , 18]);
                        return [4 /*yield*/, self.lockProvider.aquireLock(eventId)];
                    case 1:
                        gotLock = _b.sent();
                        if (!gotLock) return [3 /*break*/, 15];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 12, 14]);
                        return [4 /*yield*/, self.persistence.getEvent(eventId)];
                    case 3:
                        evt = _b.sent();
                        if (!(evt.eventTime <= new Date())) return [3 /*break*/, 11];
                        return [4 /*yield*/, self.persistence.getSubscriptions(evt.eventName, evt.eventKey, evt.eventTime)];
                    case 4:
                        subs = _b.sent();
                        success = true;
                        _i = 0, subs_1 = subs;
                        _b.label = 5;
                    case 5:
                        if (!(_i < subs_1.length)) return [3 /*break*/, 9];
                        sub = subs_1[_i];
                        _a = success;
                        if (!_a) return [3 /*break*/, 7];
                        return [4 /*yield*/, self.seedSubscription(self, evt, sub)];
                    case 6:
                        _a = (_b.sent());
                        _b.label = 7;
                    case 7:
                        success = _a;
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 5];
                    case 9:
                        if (!success) return [3 /*break*/, 11];
                        return [4 /*yield*/, self.persistence.markEventProcessed(eventId)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, self.lockProvider.releaseLock(eventId)];
                    case 13:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        self.logger.log("Event locked: " + eventId);
                        _b.label = 16;
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        err_2 = _b.sent();
                        self.logger.error("Error processing event: " + err_2);
                        return [3 /*break*/, 18];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    EventQueueWorker.prototype.seedSubscription = function (self, evt, sub) {
        return __awaiter(this, void 0, void 0, function () {
            var workflow, pointers, _i, pointers_1, p, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, self.lockProvider.aquireLock(sub.workflowId)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 10];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, 7, 9]);
                        return [4 /*yield*/, self.persistence.getWorkflowInstance(sub.workflowId)];
                    case 3:
                        workflow = _a.sent();
                        pointers = workflow.executionPointers.filter(function (p) { return p.eventName == sub.eventName && p.eventKey == sub.eventKey && !p.eventPublished; });
                        for (_i = 0, pointers_1 = pointers; _i < pointers_1.length; _i++) {
                            p = pointers_1[_i];
                            p.eventData = evt.eventData;
                            p.eventPublished = true;
                            p.active = true;
                        }
                        workflow.nextExecution = 0;
                        return [4 /*yield*/, self.persistence.persistWorkflow(workflow)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, self.persistence.terminateSubscription(sub.id)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 6:
                        err_3 = _a.sent();
                        self.logger.error(err_3);
                        return [2 /*return*/, false];
                    case 7: return [4 /*yield*/, self.lockProvider.releaseLock(sub.workflowId)];
                    case 8:
                        _a.sent();
                        self.queueProvider.queueForProcessing(sub.workflowId, abstractions_1.QueueType.Workflow);
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        self.logger.info("Workflow locked " + sub.workflowId);
                        return [2 /*return*/, false];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return EventQueueWorker;
}());
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IWorkflowExecutor),
    __metadata("design:type", Object)
], EventQueueWorker.prototype, "executor", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IPersistenceProvider),
    __metadata("design:type", Object)
], EventQueueWorker.prototype, "persistence", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IDistributedLockProvider),
    __metadata("design:type", Object)
], EventQueueWorker.prototype, "lockProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IQueueProvider),
    __metadata("design:type", Object)
], EventQueueWorker.prototype, "queueProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.ILogger),
    __metadata("design:type", Object)
], EventQueueWorker.prototype, "logger", void 0);
EventQueueWorker = __decorate([
    inversify_1.injectable()
], EventQueueWorker);
exports.EventQueueWorker = EventQueueWorker;
//# sourceMappingURL=event-queue-worker.js.map