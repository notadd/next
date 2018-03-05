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
var workflow_step_1 = require("./workflow-step");
var SubscriptionStep = (function (_super) {
    __extends(SubscriptionStep, _super);
    function SubscriptionStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubscriptionStep;
}(workflow_step_1.WorkflowStep));
exports.SubscriptionStep = SubscriptionStep;
