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
var step_body_1 = require("./step-body");
var InlineStepBody = (function (_super) {
    __extends(InlineStepBody, _super);
    function InlineStepBody(func) {
        var _this = _super.call(this) || this;
        _this.func = func;
        return _this;
    }
    InlineStepBody.prototype.run = function (context) {
        return this.func(context);
    };
    return InlineStepBody;
}(step_body_1.StepBody));
exports.InlineStepBody = InlineStepBody;
//# sourceMappingURL=inline-step-body.js.map