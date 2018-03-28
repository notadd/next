"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const json_loader_1 = require("./json.loader");
const fs_1 = require("fs");
class ConfigurationLoader {
    constructor() {
        this.pathForDatabaseConfigurationFile = path_1.join(process.cwd(), "configurations", "database.json");
        this.pathForGraphqlConfigurationFile = path_1.join(process.cwd(), "configurations", "graphql.json");
        this.pathForServerConfigurationFile = path_1.join(process.cwd(), "configurations", "server.json");
        this.pathForSwaggerConfigurationFile = path_1.join(process.cwd(), "configurations", "swagger.json");
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
    loadDatabaseConfiguration() {
        return this.load(this.pathForDatabaseConfigurationFile);
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
