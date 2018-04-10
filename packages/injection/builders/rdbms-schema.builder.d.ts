import { EntityMetadata } from "typeorm/metadata/EntityMetadata";
import { RdbmsSchemaBuilder as SchemaBuilder } from "typeorm/schema-builder/RdbmsSchemaBuilder";
export declare class RdbmsSchemaBuilder extends SchemaBuilder {
    protected metadatas: Array<EntityMetadata>;
    protected readonly entityToSyncMetadatas: Array<EntityMetadata>;
    setMetadatas(metadatas: Array<EntityMetadata>): void;
}
