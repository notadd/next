"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const dashboard_constants_1 = require("../constants/dashboard.constants");
function Dashboard(name) {
    return (target, key, descriptor) => {
        return common_1.ReflectMetadata(dashboard_constants_1.DASHBOARD_METADATA, name ? name : key)(target, key, descriptor);
    };
}
exports.Dashboard = Dashboard;

//# sourceMappingURL=dashboard.decorator.js.map
