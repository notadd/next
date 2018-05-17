"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RdbmsSchemaBuilder_1 = require("typeorm/schema-builder/RdbmsSchemaBuilder");
class RdbmsSchemaBuilder extends RdbmsSchemaBuilder_1.RdbmsSchemaBuilder {
    get entityToSyncMetadatas() {
        return this.metadatas
            .filter(metadata => metadata.synchronize && metadata.tableType !== "entity-child");
    }
    setMetadatas(metadatas) {
        this.metadatas = metadatas;
    }
}
exports.RdbmsSchemaBuilder = RdbmsSchemaBuilder;

//# sourceMappingURL=rdbms-schema.builder.js.map
