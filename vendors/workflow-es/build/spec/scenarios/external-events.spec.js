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
describe("external events", function () {
    var Step1 = (function (_super) {
        __extends(Step1, _super);
        function Step1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Step1.prototype.run = function (context) {
            return src_1.ExecutionResult.next();
        };
        return Step1;
    }(src_1.StepBody));
    var MyDataClass = (function () {
        function MyDataClass() {
        }
        return MyDataClass;
    }());
    var Event_Workflow = (function () {
        function Event_Workflow() {
            this.id = "event-workflow";
            this.version = 1;
        }
        Event_Workflow.prototype.build = function (builder) {
            builder
                .startWith(Step1)
                .waitFor("my-event", function (data) { return "0"; })
                .output(function (step, data) { return data.myValue = step.eventData; });
        };
        return Event_Workflow;
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
        host.registerWorkflow(Event_Workflow);
        host.start()
            .then(function () {
            host.startWorkflow("event-workflow", 1, { value1: 2, value2: 3 })
                .then(function (id) {
                workflowId = id;
                var counter1 = 0;
                var callback1 = function () {
                    persistence.getSubscriptions("my-event", "0", new Date())
                        .then(function (subs) {
                        if ((subs.length == 0) && (counter1 < 60))
                            setTimeout(callback1, 500);
                        else
                            host.publishEvent("my-event", "0", "Pass", new Date());
                        counter1++;
                    })
                        .catch(done.fail);
                };
                var counter2 = 0;
                var callback2 = function () {
                    persistence.getWorkflowInstance(workflowId)
                        .then(function (result) {
                        instance = result;
                        if ((instance.status == src_1.WorkflowStatus.Runnable) && (counter2 < 60)) {
                            counter2++;
                            setTimeout(callback2, 500);
                        }
                        else {
                            done();
                        }
                    })
                        .catch(done.fail);
                };
                setTimeout(callback1, 500);
                setTimeout(callback2, 1000);
            });
        });
    });
    afterAll(function () {
        host.stop();
    });
    it("should be marked as complete", function () {
        expect(instance.status).toBe(src_1.WorkflowStatus.Complete);
    });
    it("should have return value of 'Pass'", function () {
        expect(instance.data.myValue).toBe("Pass");
    });
});
//# sourceMappingURL=external-events.spec.js.map