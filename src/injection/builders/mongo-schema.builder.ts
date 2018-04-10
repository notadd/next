import { EntityMetadata } from "typeorm/metadata/EntityMetadata";
import { MongoDriver } from "typeorm/driver/mongodb/MongoDriver";
import { MongoSchemaBuilder as SchemaBuilder } from "typeorm/schema-builder/MongoSchemaBuilder";

export class MongoSchemaBuilder extends SchemaBuilder {
    protected metadatas: Array<EntityMetadata>;

    /**
     * @returns { Promise<void> }
     */
    async build(): Promise<void> {
        const queryRunner = (this.connection.driver as MongoDriver).createQueryRunner();
        const promises: Array<Promise<any>> = [];
        this.metadatas.forEach(metadata => {
            metadata.indices.forEach(index => {
                const options = { name: index.name, unique: index.isUnique, sparse: index.isSparse };
                promises.push(queryRunner.createCollectionIndex(metadata.tableName, index.columnNamesWithOrderingMap, options));
            });
        });
        await Promise.all(promises);
    }

    /**
     * @param { Array<EntityMetadata> } metadatas
     */
    public setMetadatas(metadatas: Array<EntityMetadata>) {
        this.metadatas = metadatas;
    }
}
