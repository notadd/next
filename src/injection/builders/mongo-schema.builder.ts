import { MongoSchemaBuilder as SchemaBuilder } from "typeorm/schema-builder/MongoSchemaBuilder";
import { MongoDriver } from "typeorm/driver/mongodb/MongoDriver";
import { EntityMetadata } from "typeorm/metadata/EntityMetadata";

export class MongoSchemaBuilder extends SchemaBuilder {
    protected metadatas: EntityMetadata[];

    /**
     * @returns { Promise<void> }
     */
    async build(): Promise<void> {
        const queryRunner = (this.connection.driver as MongoDriver).createQueryRunner();
        const promises: Promise<any>[] = [];
        this.metadatas.forEach(metadata => {
            metadata.indices.forEach(index => {
                const options = { name: index.name, unique: index.isUnique, sparse: index.isSparse };
                promises.push(queryRunner.createCollectionIndex(metadata.tableName, index.columnNamesWithOrderingMap, options));
            });
        });
        await Promise.all(promises);
    }

    /**
     * @param { EntityMetadata[] } metadatas
     */
    public setMetadatas(metadatas: EntityMetadata[]) {
        this.metadatas = metadatas;
    }
}
