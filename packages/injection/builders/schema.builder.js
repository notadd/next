"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ConnectionMetadataBuilder_1 = require("typeorm/connection/ConnectionMetadataBuilder");
const EntityMetadataValidator_1 = require("typeorm/metadata-builder/EntityMetadataValidator");
const mongo_schema_builder_1 = require("./mongo-schema.builder");
const MysqlDriver_1 = require("typeorm/driver/mysql/MysqlDriver");
const rdbms_schema_builder_1 = require("./rdbms-schema.builder");
const SqlServerDriver_1 = require("typeorm/driver/sqlserver/SqlServerDriver");
class SchemaBuilder {
    constructor() {
        this.entityMetadatas = [];
    }
    get connection() {
        return typeorm_1.getConnection();
    }
    buildMetadatas(paths) {
        const connectionMetadataBuilder = new ConnectionMetadataBuilder_1.ConnectionMetadataBuilder(this.connection);
        const entityMetadataValidator = new EntityMetadataValidator_1.EntityMetadataValidator();
        const entityMetadatas = connectionMetadataBuilder.buildEntityMetadatas(paths, []);
        Object.assign(this, { entityMetadatas });
        entityMetadataValidator.validateMany(this.entityMetadatas, this.connection.driver);
    }
    async drop() {
        const queryRunner = await this.connection.createQueryRunner("master");
        const schemas = this.entityMetadatas
            .filter(metadata => metadata.schema)
            .map(metadata => metadata.schema);
        if (this.connection.driver instanceof SqlServerDriver_1.SqlServerDriver || this.connection.driver instanceof MysqlDriver_1.MysqlDriver) {
            const databases = this.connection.driver.database ? [this.connection.driver.database] : [];
            this.entityMetadatas.forEach(metadata => {
                if (metadata.database && databases.indexOf(metadata.database) === -1) {
                    databases.push(metadata.database);
                }
            });
            await typeorm_1.PromiseUtils.runInSequence(databases, database => queryRunner.clearDatabase(schemas, database));
        }
        else {
            await queryRunner.clearDatabase(schemas);
        }
        await queryRunner.release();
    }
    async sync() {
        let builder;
        switch (this.connection.driver.constructor.name) {
            case "CordovaDriver":
            case "MysqlDriver":
            case "OracleDriver":
            case "PostgresDriver":
            case "SqliteDriver":
            case "SqljsDriver":
            case "SqlServerDriver":
            case "WebsqlDriver":
                builder = new rdbms_schema_builder_1.RdbmsSchemaBuilder(this.connection);
                builder.setMetadatas(this.entityMetadatas);
                await builder.build();
                break;
            case "MongoDriver":
                builder = new mongo_schema_builder_1.MongoSchemaBuilder(this.connection);
                builder.setMetadatas(this.entityMetadatas);
                await builder.build();
                break;
            default:
                break;
        }
    }
}
exports.SchemaBuilder = SchemaBuilder;

//# sourceMappingURL=schema.builder.js.map
