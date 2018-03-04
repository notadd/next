import { EntityMetadata } from "typeorm/metadata/EntityMetadata";
import { MongoSchemaBuilder as SchemaBuilder } from "typeorm/schema-builder/MongoSchemaBuilder";
export declare class MongoSchemaBuilder extends SchemaBuilder {
    protected metadatas: EntityMetadata[];
    build(): Promise<void>;
    setMetadatas(metadatas: EntityMetadata[]): void;
}
