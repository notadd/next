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
var src_1 = require("../../src");
var memory_persistence_provider_1 = require("../../src/services/memory-persistence-provider");
var outcomeForkScope = {
    taskATicker: 0,
    taskBTicker: 0,
    taskCTicker: 0
};
describe("multiple outcomes", function () {
    var TaskA = (function (_super) {
        __extends(TaskA, _super);
        function TaskA() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskA.prototype.run = function (context) {
            outcomeForkScope.taskATicker++;
            return src_1.ExecutionResult.outcome(true);
        };
        return TaskA;
    }(src_1.StepBody));
    var TaskB = (function (_super) {
        __extends(TaskB, _super);
        function TaskB() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskB.prototype.run = function (context) {
            outcomeForkScope.taskBTicker++;
            return src_1.ExecutionResult.next();
        };
        return TaskB;
    }(src_1.StepBody));
    var TaskC = (function (_super) {
        __extends(TaskC, _super);
        function TaskC() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TaskC.prototype.run = function (context) {
            outcomeForkScope.taskCTicker++;
            return src_1.ExecutionResult.next();
        };
        return TaskC;
    }(src_1.StepBody));
    var Outcome_Workflow = (function () {
        function Outcome_Workflow() {
            this.id = "outcome-workflow";
            this.version = 1;
        }
        Outcome_Workflow.prototype.build = function (builder) {
            var taskA = builder.startWith(TaskA);
            taskA.when(function (x) { return false; })
                .then(TaskB);
            taskA.when(function (x) { return true; })
                .then(TaskC);
        };
        return Outcome_Workflow;
    }());
    var workflowId = null;
    var instance = null;
    var persistence = new memory_persistence_provider_1.MemoryPersistenceProvider();
    var config = src_1.configureWorkflow();
    config.useLogger(new src_1.ConsoleLogger());
    config.usePersistence(persistence);
    var host = config.getHost();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    beforeAll(function (done) {
        host.registerWorkflow(Outcome_Workflow);
        host.start()
            .then(function () {
            host.startWorkflow("outcome-workflow", 1, null)
                .then(function (id) {
                workflowId = id;
                var counter = 0;
                var callback = function () {
                    persistence.getWorkflowInstance(workflowId)
                        .then(function (result) {
                        instance = result;
                        if ((instance.status == src_1.WorkflowStatus.Runnable) && (counter < 60)) {
                            counter++;
                            setTimeout(callback, 500);
                        }
                        else {
                            done();
                        }
                    })
                        .catch(done.fail);
                };
                setTimeout(callback, 500);
            });
        });
    });
    afterAll(function () {
        host.stop();
    });
    it("should be marked as complete", function () {
        expect(instance.status).toBe(src_1.WorkflowStatus.Complete);
    });
    it("should have executed task A once", function () {
        expect(outcomeForkScope.taskATicker).toBe(1);
    });
    it("should not have executed task B", function () {
        expect(outcomeForkScope.taskBTicker).toBe(0);
    });
    it("should have executed task C once", function () {
        expect(outcomeForkScope.taskCTicker).toBe(1);
    });
});
//# sourceMappingURL=outcome-fork.spec.js.map