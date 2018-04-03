"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = require("../paths");
const fs_1 = require("fs");
const json_loader_1 = require("./json.loader");
const common_1 = require("@nestjs/common");
const loggers_1 = require("@notadd/logger/loggers");
class ConfigurationLoader {
    constructor() {
        this.pathForApplicationConfigurationFile = paths_1.ConfigurationPath.application;
        this.pathForDatabaseConfigurationFile = paths_1.ConfigurationPath.database;
        this.pathForGraphqlConfigurationFile = paths_1.ConfigurationPath.graphql;
        this.pathForServerConfigurationFile = paths_1.ConfigurationPath.server;
        this.pathForSwaggerConfigurationFile = paths_1.ConfigurationPath.swagger;
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
