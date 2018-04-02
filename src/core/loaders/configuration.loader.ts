import { ApplicationConfiguration } from "../configurations";
import { DatabaseConfiguration, GraphqlConfiguration, ServerConfiguration } from "../configurations";
import { join } from "path";
import { Json } from "./json.loader";
import { existsSync } from "fs";
import { SwaggerConfiguration } from "../configurations/swagger.configuration";

export class ConfigurationLoader {
    private pathForApplicationConfigurationFile = join(process.cwd(), "configurations", "application.json");

    private pathForDatabaseConfigurationFile = join(process.cwd(), "configurations", "database.json");

    private pathForGraphqlConfigurationFile = join(process.cwd(), "configurations", "graphql.json");

    private pathForServerConfigurationFile = join(process.cwd(), "configurations", "server.json");

    private pathForSwaggerConfigurationFile = join(process.cwd(), "configurations", "swagger.json");

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
        return this.load<DatabaseConfiguration>(this.pathForDatabaseConfigurationFile);
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
