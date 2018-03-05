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
var basicWorkflowScope = {
    step1Ticker: 0,
    step2Ticker: 0
};
describe("basic workflow", function () {
    var Step1 = (function (_super) {
        __extends(Step1, _super);
        function Step1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Step1.prototype.run = function (context) {
            basicWorkflowScope.step1Ticker++;
            return src_1.ExecutionResult.next();
        };
        return Step1;
    }(src_1.StepBody));
    var Step2 = (function (_super) {
        __extends(Step2, _super);
        function Step2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Step2.prototype.run = function (context) {
            basicWorkflowScope.step2Ticker++;
            return src_1.ExecutionResult.next();
        };
        return Step2;
    }(src_1.StepBody));
    var Basic_Workflow = (function () {
        function Basic_Workflow() {
            this.id = "basic-workflow";
            this.version = 1;
        }
        Basic_Workflow.prototype.build = function (builder) {
            builder
                .startWith(Step1)
                .then(Step2);
        };
        return Basic_Workflow;
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
        host.registerWorkflow(Basic_Workflow);
        host.start()
            .then(function () {
            host.startWorkflow("basic-workflow", 1, null)
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
    it("should have an id", function () {
        expect(workflowId).toBeDefined();
    });
    it("should be marked as complete", function () {
        expect(instance.status).toBe(src_1.WorkflowStatus.Complete);
    });
    it("should have executed step 1 once", function () {
        expect(basicWorkflowScope.step1Ticker).toBe(1);
    });
    it("should have executed step 2 once", function () {
        expect(basicWorkflowScope.step2Ticker).toBe(1);
    });
});
//# sourceMappingURL=basic-workflow.spec.js.map