"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExecutionResult = (function () {
    function ExecutionResult() {
        this.branchValues = [];
    }
    ExecutionResult.outcome = function (value) {
        var result = new ExecutionResult();
        result.outcomeValue = value;
        result.proceed = true;
        return Promise.resolve(result);
    };
    ExecutionResult.next = function () {
        var result = new ExecutionResult();
        result.outcomeValue = null;
        result.proceed = true;
        return Promise.resolve(result);
    };
    ExecutionResult.persist = function (persistenceData) {
        var result = new ExecutionResult();
        result.proceed = false;
        result.persistenceData = persistenceData;
        return Promise.resolve(result);
    };
    ExecutionResult.sleep = function (until, persistenceData) {
        var result = new ExecutionResult();
        result.proceed = false;
        result.persistenceData = persistenceData;
        result.sleep = until;
        return Promise.resolve(result);
    };
    ExecutionResult.branch = function (branches, persistenceData) {
        var result = new ExecutionResult();
        result.proceed = false;
        result.persistenceData = persistenceData;
        result.branchValues = branches;
        return Promise.resolve(result);
    };
    return ExecutionResult;
}());
exports.ExecutionResult = ExecutionResult;
//# sourceMappingURL=execution-result.js.map