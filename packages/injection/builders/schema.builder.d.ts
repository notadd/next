import { Connection } from "typeorm";
export declare class SchemaBuilder {
    private readonly entityMetadatas;
    protected readonly connection: Connection;
    buildMetadatas(paths: Array<string>): void;
    drop(): Promise<void>;
    sync(): Promise<void>;
}
