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
var PollWorker = (function () {
    function PollWorker() {
    }
    PollWorker.prototype.start = function () {
        this.processTimer = setInterval(this.process, 10000, this);
    };
    PollWorker.prototype.stop = function () {
        this.logger.log("Stopping poll worker...");
        if (this.processTimer)
            clearInterval(this.processTimer);
    };
    PollWorker.prototype.process = function (self) {
        return __awaiter(this, void 0, void 0, function () {
            var runnables, _i, runnables_1, item, err_1, events, _a, events_1, item, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        self.logger.info("pollRunnables " + " - now = " + Date.now());
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, self.persistence.getRunnableInstances()];
                    case 2:
                        runnables = _b.sent();
                        for (_i = 0, runnables_1 = runnables; _i < runnables_1.length; _i++) {
                            item = runnables_1[_i];
                            self.queueProvider.queueForProcessing(item, abstractions_1.QueueType.Workflow);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        self.logger.error("Error running poll: " + err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, self.persistence.getRunnableEvents()];
                    case 5:
                        events = _b.sent();
                        for (_a = 0, events_1 = events; _a < events_1.length; _a++) {
                            item = events_1[_a];
                            self.queueProvider.queueForProcessing(item, abstractions_1.QueueType.Event);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _b.sent();
                        self.logger.error("Error running poll: " + err_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return PollWorker;
}());
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IPersistenceProvider),
    __metadata("design:type", Object)
], PollWorker.prototype, "persistence", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IDistributedLockProvider),
    __metadata("design:type", Object)
], PollWorker.prototype, "lockProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.IQueueProvider),
    __metadata("design:type", Object)
], PollWorker.prototype, "queueProvider", void 0);
__decorate([
    inversify_1.inject(abstractions_1.TYPES.ILogger),
    __metadata("design:type", Object)
], PollWorker.prototype, "logger", void 0);
PollWorker = __decorate([
    inversify_1.injectable()
], PollWorker);
exports.PollWorker = PollWorker;
//# sourceMappingURL=poll-worker.js.map