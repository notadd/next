import { DatabaseConfiguration, GraphqlConfiguration, ServerConfiguration } from "../configurations";
export declare class ConfigurationLoader {
    private pathForDatabaseConfigurationFile;
    private pathForGraphqlConfigurationFile;
    private pathForServerConfigurationFile;
    existsDatabaseConfiguration(): boolean;
    existsGraphqlConfiguration(): boolean;
    existsServerConfiguration(): boolean;
    load<T>(path: any): T;
    loadDatabaseConfiguration(): DatabaseConfiguration;
    loadGraphqlConfiguration(): GraphqlConfiguration;
    loadServerConfiguration(): ServerConfiguration;
}
export declare const Configuration: ConfigurationLoader;
