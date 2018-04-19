"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
function Dashboard(name) {
    return (target, key, descriptor) => {
        common_1.ReflectMetadata(constants_1.DASHBOARD_DATA_METADATA, name ? name : key)(target, key, descriptor);
        common_1.ReflectMetadata(constants_1.DASHBOARD_NAME_METADATA, name ? name : key)(target, key, descriptor);
    };
}
exports.Dashboard = Dashboard;

//# sourceMappingURL=dashboard.decorator.js.map
