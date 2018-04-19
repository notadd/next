"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.ConfigurationPath = {
    application: path_1.join(process.cwd(), "configurations", "application.json"),
    database: path_1.join(process.cwd(), "configurations", "database.json"),
    graphql: path_1.join(process.cwd(), "configurations", "graphql.json"),
    server: path_1.join(process.cwd(), "configurations", "server.json"),
    swagger: path_1.join(process.cwd(), "configurations", "swagger.json"),
};

//# sourceMappingURL=configuration.path.js.map
