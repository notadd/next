"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RdbmsSchemaBuilder_1 = require("typeorm/schema-builder/RdbmsSchemaBuilder");
class RdbmsSchemaBuilder extends RdbmsSchemaBuilder_1.RdbmsSchemaBuilder {
    get entityToSyncMetadatas() {
        return this.metadatas
            .filter(metadata => !metadata.skipSync && metadata.tableType !== "single-table-child");
    }
    setMetadatas(metadatas) {
        this.metadatas = metadatas;
    }
}
exports.RdbmsSchemaBuilder = RdbmsSchemaBuilder;
