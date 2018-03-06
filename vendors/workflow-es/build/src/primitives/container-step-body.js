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
var abstractions_1 = require("../abstractions");
var ContainerStepBody = (function (_super) {
    __extends(ContainerStepBody, _super);
    function ContainerStepBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContainerStepBody.prototype.isBranchComplete = function (pointers, rootId) {
        var root = pointers.find(function (x) { return x.id == rootId; });
        if (!root.endTime)
            return false;
        var list = pointers.filter(function (x) { return x.predecessorId == rootId; });
        var result = true;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            result = result && this.isBranchComplete(pointers, item.id);
        }
        return result;
    };
    return ContainerStepBody;
}(abstractions_1.StepBody));
exports.ContainerStepBody = ContainerStepBody;
//# sourceMappingURL=container-step-body.js.map