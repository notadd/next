import { ApplicationConfiguration } from "../configurations";
import { DatabaseConfiguration, GraphqlConfiguration, ServerConfiguration } from "../configurations";
import { Logger } from "@nestjs/common";
import { SwaggerConfiguration } from "../configurations/swagger.configuration";
export declare class ConfigurationLoader {
    private pathForApplicationConfigurationFile;
    private pathForDatabaseConfigurationFile;
    private pathForGraphqlConfigurationFile;
    private pathForServerConfigurationFile;
    private pathForSwaggerConfigurationFile;
    protected logger: Logger;
    existsApplicationConfiguration(): boolean;
    existsDatabaseConfiguration(): boolean;
    existsGraphqlConfiguration(): boolean;
    existsServerConfiguration(): boolean;
    existsSwaggerConfiguration(): boolean;
    load<T>(path: string): T;
    loadApplicationConfiguration(): ApplicationConfiguration;
    loadDatabaseConfiguration(): DatabaseConfiguration;
    loadGraphqlConfiguration(): GraphqlConfiguration;
    loadServerConfiguration(): ServerConfiguration;
    loadSwaggerConfiguration(): SwaggerConfiguration;
}
export declare const Configuration: ConfigurationLoader;
