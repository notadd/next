"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const json_loader_1 = require("./json.loader");
const loggers_1 = require("@notadd/logger/loggers");
class ConfigurationLoader {
    constructor() {
        this.pathForApplicationConfigurationFile = path_1.join(process.cwd(), "configurations", "application.json");
        this.pathForDatabaseConfigurationFile = path_1.join(process.cwd(), "configurations", "database.json");
        this.pathForGraphqlConfigurationFile = path_1.join(process.cwd(), "configurations", "graphql.json");
        this.pathForServerConfigurationFile = path_1.join(process.cwd(), "configurations", "server.json");
        this.pathForSwaggerConfigurationFile = path_1.join(process.cwd(), "configurations", "swagger.json");
        this.logger = new common_1.Logger("ConfigurationLoader");
    }
    existsApplicationConfiguration() {
        return fs_1.existsSync(this.pathForApplicationConfigurationFile);
    }
    existsDatabaseConfiguration() {
        return fs_1.existsSync(this.pathForDatabaseConfigurationFile);
    }
    existsGraphqlConfiguration() {
        return fs_1.existsSync(this.pathForGraphqlConfigurationFile);
    }
    existsServerConfiguration() {
        return fs_1.existsSync(this.pathForServerConfigurationFile);
    }
    existsSwaggerConfiguration() {
        return fs_1.existsSync(this.pathForSwaggerConfigurationFile);
    }
    load(path) {
        return json_loader_1.Json.load(path);
    }
    loadApplicationConfiguration() {
        return this.load(this.pathForDatabaseConfigurationFile);
    }
    loadDatabaseConfiguration() {
        const configuration = this.load(this.pathForDatabaseConfigurationFile);
        Object.assign(configuration, {
            logger: new loggers_1.TypeormLogger("all"),
        });
        return configuration;
    }
    loadGraphqlConfiguration() {
        return this.load(this.pathForGraphqlConfigurationFile);
    }
    loadServerConfiguration() {
        return this.load(this.pathForServerConfigurationFile);
    }
    loadSwaggerConfiguration() {
        return this.load(this.pathForSwaggerConfigurationFile);
    }
}
exports.ConfigurationLoader = ConfigurationLoader;
exports.Configuration = new ConfigurationLoader();
