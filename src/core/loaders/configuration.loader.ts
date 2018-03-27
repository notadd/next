import { DatabaseConfiguration, GraphqlConfiguration, ServerConfiguration } from "../configurations";
import { join } from "path";
import { existsSync } from "fs";

export class ConfigurationLoader {
    private pathForDatabaseConfigurationFile = join(process.cwd(), "configurations", "database.json");

    private pathForGraphqlConfigurationFile = join(process.cwd(), "configurations", "graphql.json");

    private pathForServerConfigurationFile = join(process.cwd(), "configurations", "server.json");

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
     * @param path
     *
     * @returns { T }
     */
    public load<T>(path): T {
        return require(path);
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
}

export const Configuration = new ConfigurationLoader();
