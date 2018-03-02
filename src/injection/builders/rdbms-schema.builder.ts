import { EntityMetadata } from "typeorm/metadata/EntityMetadata";
import { RdbmsSchemaBuilder as SchemaBuilder } from "typeorm/schema-builder/RdbmsSchemaBuilder";

export class RdbmsSchemaBuilder extends SchemaBuilder {
    protected metadatas: EntityMetadata[];

    /**
     * @returns { EntityMetadata[] }
     */
    protected get entityToSyncMetadatas(): EntityMetadata[] {
        return this.metadatas
            .filter(metadata => !metadata.skipSync && metadata.tableType !== "single-table-child");
    }

    /**
     * @param { EntityMetadata[] } metadatas
     */
    public setMetadatas(metadatas: EntityMetadata[]) {
        this.metadatas = metadatas;
    }
}
