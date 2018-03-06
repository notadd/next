"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../src/models");
var memory_persistence_provider_1 = require("../src/services/memory-persistence-provider");
describe("memory-persistence-provider", function () {
    var persistence = new memory_persistence_provider_1.MemoryPersistenceProvider();
    var wf1;
    beforeEach(function () {
    });
    describe("createNewWorkflow", function () {
        var returnedId;
        beforeEach(function (done) {
            wf1 = new models_1.WorkflowInstance();
            return persistence.createNewWorkflow(wf1)
                .then(function (id) {
                returnedId = id;
                done();
            })
                .catch(done.fail);
        });
        it("should return a generated id", function () {
            expect(returnedId).toBeDefined();
        });
        it("should return update original object with id", function () {
            expect(wf1.id).toBeDefined();
        });
    });
    describe("getWorkflowInstance", function () {
        var wf2;
        beforeEach(function (done) {
            persistence.getWorkflowInstance(wf1.id)
                .then(function (wf) {
                wf2 = wf;
                done();
            })
                .catch(done.fail);
        });
        it("should match the orignal", function () {
            expect(JSON.stringify(wf2)).toBe(JSON.stringify(wf1));
        });
    });
    describe("persistWorkflow", function () {
        var modified;
        beforeEach(function (done) {
            modified = JSON.parse(JSON.stringify(wf1));
            modified.nextExecution = 44;
            modified.executionPointers.push(new models_1.ExecutionPointer());
            persistence.persistWorkflow(modified)
                .then(function () { return done(); })
                .catch(done.fail);
        });
        it("should match the orignal", function (done) {
            persistence.getWorkflowInstance(modified.id)
                .then(function (data) {
                expect(JSON.stringify(data)).toBe(JSON.stringify(modified));
                done();
            })
                .catch(done.fail);
        });
    });
});
//# sourceMappingURL=memory-persistence-provider.spec.js.map