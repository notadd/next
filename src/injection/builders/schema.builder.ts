import { Connection, getConnection, PromiseUtils } from "typeorm";
import { ConnectionMetadataBuilder } from "typeorm/connection/ConnectionMetadataBuilder";
import { MysqlDriver } from "typeorm/driver/mysql/MysqlDriver";
import { SqlServerDriver } from "typeorm/driver/sqlserver/SqlServerDriver";
import { EntityMetadataValidator } from "typeorm/metadata-builder/EntityMetadataValidator";
import { EntityMetadata } from "typeorm/metadata/EntityMetadata";
import { RdbmsSchemaBuilder } from "./rdbms-schema.builder";

export class SchemaBuilder {
    private readonly entityMetadatas: EntityMetadata[] = [];

    /**
     * @returns { Connection }
     */
    protected get connection(): Connection {
        return getConnection();
    }

    /**
     * @param { Array<string> } paths
     */
    public buildMetadatas(paths: Array<string>): void {
        const connectionMetadataBuilder = new ConnectionMetadataBuilder(this.connection);
        const entityMetadataValidator = new EntityMetadataValidator();
        const entityMetadatas = connectionMetadataBuilder.buildEntityMetadatas(paths,  []);
        Object.assign(this, { entityMetadatas: entityMetadatas });
        entityMetadataValidator.validateMany(this.entityMetadatas, this.connection.driver);
    }

    public async drop() {
        const queryRunner = await this.connection.createQueryRunner("master");
        const schemas = this.entityMetadatas
            .filter(metadata => metadata.schema)
            .map(metadata => metadata.schema!);

        if (this.connection.driver instanceof SqlServerDriver || this.connection.driver instanceof MysqlDriver) {
            const databases: string[] = this.connection.driver.database ? [this.connection.driver.database] : [];

            this.entityMetadatas.forEach(metadata => {
                if (metadata.database && databases.indexOf(metadata.database) === -1)
                    databases.push(metadata.database);
            });

            await PromiseUtils.runInSequence(databases, database => queryRunner.clearDatabase(schemas, database));
        } else {
            await queryRunner.clearDatabase(schemas);
        }
        await queryRunner.release();
    }

    public async sync() {
        switch (this.connection.driver.constructor.name) {
            case "CordovaDriver":
            case "MysqlDriver":
            case "OracleDriver":
            case "PostgresDriver":
            case "SqliteDriver":
            case "SqljsDriver":
            case "SqlServerDriver":
            case "WebsqlDriver":
                const builder = new RdbmsSchemaBuilder(this.connection);
                builder.setMetadatas(this.entityMetadatas);
                await builder.build();
                break;
            case "MongoDriver":
                break;
            default:
                break;
        }
    }
}
