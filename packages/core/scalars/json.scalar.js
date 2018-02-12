"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
function parseJSONLiteral(ast) {
    switch (ast.kind) {
        case language_1.Kind.STRING:
        case language_1.Kind.BOOLEAN:
            return ast.value;
        case language_1.Kind.INT:
        case language_1.Kind.FLOAT:
            return parseFloat(ast.value);
        case language_1.Kind.OBJECT: {
            const value = Object.create(null);
            ast.fields.forEach(field => {
                value[field.name.value] = parseJSONLiteral(field.value);
            });
            return value;
        }
        case language_1.Kind.LIST:
            return ast.values.map(parseJSONLiteral);
        default:
            return null;
    }
}
exports.JsonScalar = new graphql_1.GraphQLScalarType({
    name: "JSON",
    description: "JSON custom scalar",
    parseValue(value) {
        return value;
    },
    serialize(value) {
        return value;
    },
    parseLiteral: parseJSONLiteral,
});
