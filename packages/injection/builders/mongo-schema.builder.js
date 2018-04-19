"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongoSchemaBuilder_1 = require("typeorm/schema-builder/MongoSchemaBuilder");
class MongoSchemaBuilder extends MongoSchemaBuilder_1.MongoSchemaBuilder {
    async build() {
        const queryRunner = this.connection.driver.createQueryRunner();
        const promises = [];
        this.metadatas.forEach(metadata => {
            metadata.indices.forEach(index => {
                const options = { name: index.name, unique: index.isUnique, sparse: index.isSparse };
                promises.push(queryRunner.createCollectionIndex(metadata.tableName, index.columnNamesWithOrderingMap, options));
            });
        });
        await Promise.all(promises);
    }
    setMetadatas(metadatas) {
        this.metadatas = metadatas;
    }
}
exports.MongoSchemaBuilder = MongoSchemaBuilder;

//# sourceMappingURL=mongo-schema.builder.js.map
