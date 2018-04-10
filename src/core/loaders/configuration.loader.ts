import { ApplicationConfiguration, DatabaseConfiguration, GraphqlConfiguration, ServerConfiguration } from "../configurations";
import { ConfigurationPath } from "../paths";
import { existsSync } from "fs";
import { Json } from "./json.loader";
import { Logger } from "@nestjs/common";
import { SwaggerConfiguration } from "../configurations/swagger.configuration";
import { TypeormLogger } from "@notadd/logger/loggers";

export class ConfigurationLoader {
    private pathForApplicationConfigurationFile = ConfigurationPath.application;

    private pathForDatabaseConfigurationFile = ConfigurationPath.database;

    private pathForGraphqlConfigurationFile = ConfigurationPath.graphql;

    private pathForServerConfigurationFile = ConfigurationPath.server;

    private pathForSwaggerConfigurationFile = ConfigurationPath.swagger;

    protected logger = new Logger("ConfigurationLoader");

    /**
     * @returns { boolean }
     */
    public existsApplicationConfiguration(): boolean {
        return existsSync(this.pathForApplicationConfigurationFile);
    }

    /**
     * @returns { boolean }
     */
    public existsDatabaseConfiguration(): boolean {
        return existsSync(this.pathForDatabaseConfigurationFile);
    }

    /**
     * @returns { boolean }
     */
    public existsGraphqlConfiguration(): boolean {
        return existsSync(this.pathForGraphqlConfigurationFile);
    }

    /**
     * @returns { boolean }
     */
    public existsServerConfiguration(): boolean {
        return existsSync(this.pathForServerConfigurationFile);
    }

    /**
     * @returns { boolean }
     */
    public existsSwaggerConfiguration(): boolean {
        return existsSync(this.pathForSwaggerConfigurationFile);
    }

    /**
     * @param { string } path
     *
     * @returns { T }
     */
    public load<T>(path: string): T {
        return Json.load<T>(path);
    }

    /**
     * @returns { ApplicationConfiguration }
     */
    public loadApplicationConfiguration(): ApplicationConfiguration {
        return this.load<ApplicationConfiguration>(this.pathForDatabaseConfigurationFile);
    }

    /**
     * @returns { DatabaseConfiguration }
     */
    public loadDatabaseConfiguration(): DatabaseConfiguration {
        const configuration = this.load<DatabaseConfiguration>(this.pathForDatabaseConfigurationFile);
        Object.assign(configuration, {
            logger: new TypeormLogger("all"),
        });

        return configuration;
    }

    /**
     * @returns { GraphqlConfiguration }
     */
    public loadGraphqlConfiguration(): GraphqlConfiguration {
        return this.load<GraphqlConfiguration>(this.pathForGraphqlConfigurationFile);
    }

    /**
     * @returns { ServerConfiguration }
     */
    public loadServerConfiguration(): ServerConfiguration {
        return this.load<ServerConfiguration>(this.pathForServerConfigurationFile);
    }

    /**
     * @returns { SwaggerConfiguration }
     */
    public loadSwaggerConfiguration(): SwaggerConfiguration {
        return this.load<SwaggerConfiguration>(this.pathForSwaggerConfigurationFile);
    }
}

export const Configuration = new ConfigurationLoader();
