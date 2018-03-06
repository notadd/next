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
var models_1 = require("../models");
var container_step_body_1 = require("./container-step-body");
var Foreach = (function (_super) {
    __extends(Foreach, _super);
    function Foreach() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Foreach.prototype.run = function (context) {
        if (!context.persistenceData) {
            var containerData = new models_1.ContainerData();
            containerData.childrenActive = true;
            return models_1.ExecutionResult.branch(this.collection, containerData);
        }
        if (context.persistenceData.childrenActive) {
            var complete = true;
            for (var _i = 0, _a = context.pointer.children; _i < _a.length; _i++) {
                var childId = _a[_i];
                complete = complete && this.isBranchComplete(context.workflow.executionPointers, childId);
            }
            if (complete)
                return models_1.ExecutionResult.next();
        }
        return models_1.ExecutionResult.persist(context.persistenceData);
    };
    return Foreach;
}(container_step_body_1.ContainerStepBody));
exports.Foreach = Foreach;
//# sourceMappingURL=foreach.js.map