import { EntityMetadata } from "typeorm/metadata/EntityMetadata";
import { RdbmsSchemaBuilder as SchemaBuilder } from "typeorm/schema-builder/RdbmsSchemaBuilder";
export declare class RdbmsSchemaBuilder extends SchemaBuilder {
    protected metadatas: EntityMetadata[];
    protected readonly entityToSyncMetadatas: EntityMetadata[];
    setMetadatas(metadatas: EntityMetadata[]): void;
}
