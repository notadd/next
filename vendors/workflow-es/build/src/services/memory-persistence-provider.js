"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var wfes_instances = [];
var wfes_subscriptions = [];
var wfes_events = [];
// In-memory implementation of IPersistenceProvider for demo and testing purposes
var MemoryPersistenceProvider = (function () {
    function MemoryPersistenceProvider() {
    }
    MemoryPersistenceProvider.prototype.createNewWorkflow = function (instance) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                instance.id = this.generateUID();
                wfes_instances.push(instance);
                return [2 /*return*/, instance.id];
            });
        });
    };
    MemoryPersistenceProvider.prototype.persistWorkflow = function (instance) {
        return __awaiter(this, void 0, void 0, function () {
            var _, existing, idx;
            return __generator(this, function (_a) {
                _ = require("underscore");
                existing = _.findWhere(wfes_instances, { id: instance.id });
                idx = wfes_instances.indexOf(existing);
                wfes_instances[idx] = instance;
                return [2 /*return*/];
            });
        });
    };
    MemoryPersistenceProvider.prototype.getWorkflowInstance = function (workflowId) {
        return __awaiter(this, void 0, void 0, function () {
            var _, existing;
            return __generator(this, function (_a) {
                _ = require("underscore");
                existing = _.findWhere(wfes_instances, { id: workflowId });
                return [2 /*return*/, existing];
            });
        });
    };
    MemoryPersistenceProvider.prototype.getRunnableInstances = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _, runnables, result, _i, runnables_1, item;
            return __generator(this, function (_a) {
                _ = require("underscore");
                runnables = wfes_instances.filter(function (x) { return x.status == models_1.WorkflowStatus.Runnable && x.nextExecution < Date.now(); });
                result = [];
                for (_i = 0, runnables_1 = runnables; _i < runnables_1.length; _i++) {
                    item = runnables_1[_i];
                    result.push(item.id);
                }
                return [2 /*return*/, result];
            });
        });
    };
    MemoryPersistenceProvider.prototype.createEventSubscription = function (subscription) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                subscription.id = this.generateUID();
                wfes_subscriptions.push(subscription);
                return [2 /*return*/];
            });
        });
    };
    MemoryPersistenceProvider.prototype.getSubscriptions = function (eventName, eventKey, asOf) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, wfes_subscriptions.filter(function (x) { return x.eventName == eventName && x.eventKey == eventKey && x.subscribeAsOf <= asOf; })];
            });
        });
    };
    MemoryPersistenceProvider.prototype.terminateSubscription = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, item;
            return __generator(this, function (_b) {
                for (_i = 0, _a = wfes_subscriptions.filter(function (x) { return x.id == id; }); _i < _a.length; _i++) {
                    item = _a[_i];
                    wfes_subscriptions.splice(wfes_subscriptions.indexOf(item), 1);
                }
                return [2 /*return*/];
            });
        });
    };
    MemoryPersistenceProvider.prototype.createEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                event.id = this.generateUID();
                wfes_events.push(event);
                return [2 /*return*/, event.id];
            });
        });
    };
    MemoryPersistenceProvider.prototype.getEvent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, wfes_events.find(function (x) { return x.id == id; })];
            });
        });
    };
    MemoryPersistenceProvider.prototype.getRunnableEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, wfes_events
                        .filter(function (x) { return !x.isProcessed && x.eventTime <= new Date(); })
                        .map(function (x) { return x.id; })];
            });
        });
    };
    MemoryPersistenceProvider.prototype.markEventProcessed = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var evt;
            return __generator(this, function (_a) {
                evt = wfes_events.find(function (x) { return x.id == id; });
                if (evt)
                    evt.isProcessed = true;
                return [2 /*return*/];
            });
        });
    };
    MemoryPersistenceProvider.prototype.markEventUnprocessed = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var evt;
            return __generator(this, function (_a) {
                evt = wfes_events.find(function (x) { return x.id == id; });
                if (evt)
                    evt.isProcessed = false;
                return [2 /*return*/];
            });
        });
    };
    MemoryPersistenceProvider.prototype.getEvents = function (eventName, eventKey, asOf) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, wfes_events
                        .filter(function (x) { return x.eventName == eventName && x.eventKey == eventKey && x.eventTime >= asOf; })
                        .map(function (x) { return x.id; })];
            });
        });
    };
    MemoryPersistenceProvider.prototype.generateUID = function () {
        return (Math.random() * 0x10000000000000).toString(16);
    };
    return MemoryPersistenceProvider;
}());
MemoryPersistenceProvider = __decorate([
    inversify_1.injectable()
], MemoryPersistenceProvider);
exports.MemoryPersistenceProvider = MemoryPersistenceProvider;
//# sourceMappingURL=memory-persistence-provider.js.map