"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const language_1 = require("graphql/language");
function parseLiteral(ast) {
    switch (ast.kind) {
        case language_1.Kind.STRING:
        case language_1.Kind.BOOLEAN:
            return ast.value;
        case language_1.Kind.INT:
        case language_1.Kind.FLOAT:
            return parseFloat(ast.value);
        case language_1.Kind.OBJECT: {
            const value = Object.create(null);
            ast.fields.forEach((field) => {
                value[field.name.value] = parseLiteral(field.value);
            });
            return value;
        }
        case language_1.Kind.LIST:
            return ast.values.map(parseLiteral);
        default:
            return null;
    }
}
let JsonResolvers = class JsonResolvers {
    json() {
        return new graphql_2.GraphQLScalarType({
            name: 'JSON',
            description: 'The `JSON` scalar type represents JSON values as specified by ' +
                '[ECMA-404](http://www.ecma-international.org/' +
                'publications/files/ECMA-ST/ECMA-404.pdf).',
            serialize(value) {
                console.log(value);
                return value;
            },
            parseValue(value) {
                console.log(value);
                return value;
            },
            parseLiteral,
        });
    }
};
__decorate([
    graphql_1.ResolveProperty("Json"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof graphql_2.GraphQLScalarType !== "undefined" && graphql_2.GraphQLScalarType) === "function" && _a || Object)
], JsonResolvers.prototype, "json", null);
JsonResolvers = __decorate([
    graphql_1.Resolver()
], JsonResolvers);
exports.JsonResolvers = JsonResolvers;
var _a;
