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
describe("data io", function () {
    var AddNumbers = (function (_super) {
        __extends(AddNumbers, _super);
        function AddNumbers() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AddNumbers.prototype.run = function (context) {
            this.result = this.number1 + this.number2;
            return src_1.ExecutionResult.next();
        };
        return AddNumbers;
    }(src_1.StepBody));
    var MyDataClass = (function () {
        function MyDataClass() {
        }
        return MyDataClass;
    }());
    var Data_Workflow = (function () {
        function Data_Workflow() {
            this.id = "data-workflow";
            this.version = 1;
        }
        Data_Workflow.prototype.build = function (builder) {
            builder
                .startWith(AddNumbers)
                .input(function (step, data) { return step.number1 = data.value1; })
                .input(function (step, data) { return step.number2 = data.value2; })
                .output(function (step, data) { return data.value3 = step.result; });
        };
        return Data_Workflow;
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
        host.registerWorkflow(Data_Workflow);
        host.start()
            .then(function () {
            host.startWorkflow("data-workflow", 1, { value1: 2, value2: 3 })
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
    it("should have return value of 5", function () {
        expect(instance.data.value3).toBe(5);
    });
});
//# sourceMappingURL=data-io.spec.js.map