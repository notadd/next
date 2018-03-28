import { DatabaseConfiguration, GraphqlConfiguration, ServerConfiguration } from "../configurations";
import { SwaggerConfiguration } from "../configurations/swagger.configuration";
export declare class ConfigurationLoader {
    private pathForDatabaseConfigurationFile;
    private pathForGraphqlConfigurationFile;
    private pathForServerConfigurationFile;
    private pathForSwaggerConfigurationFile;
    existsDatabaseConfiguration(): boolean;
    existsGraphqlConfiguration(): boolean;
    existsServerConfiguration(): boolean;
    existsSwaggerConfiguration(): boolean;
    load<T>(path: string): T;
    loadDatabaseConfiguration(): DatabaseConfiguration;
    loadGraphqlConfiguration(): GraphqlConfiguration;
    loadServerConfiguration(): ServerConfiguration;
    loadSwaggerConfiguration(): SwaggerConfiguration;
}
export declare const Configuration: ConfigurationLoader;
