"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MongoSchemaBuilder_1 = require("typeorm/schema-builder/MongoSchemaBuilder");
class MongoSchemaBuilder extends MongoSchemaBuilder_1.MongoSchemaBuilder {
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryRunner = this.connection.driver.createQueryRunner();
            const promises = [];
            this.metadatas.forEach(metadata => {
                metadata.indices.forEach(index => {
                    const options = { name: index.name, unique: index.isUnique, sparse: index.isSparse };
                    promises.push(queryRunner.createCollectionIndex(metadata.tableName, index.columnNamesWithOrderingMap, options));
                });
            });
            yield Promise.all(promises);
        });
    }
    setMetadatas(metadatas) {
        this.metadatas = metadatas;
    }
}
exports.MongoSchemaBuilder = MongoSchemaBuilder;
