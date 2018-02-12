import { ResolveProperty, Resolver } from "@nestjs/graphql";
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

function parseLiteral(ast) {
    switch (ast.kind) {
        case Kind.STRING:
        case Kind.BOOLEAN:
            return ast.value;
        case Kind.INT:
        case Kind.FLOAT:
            return parseFloat(ast.value);
        case Kind.OBJECT: {
            const value = Object.create(null);
            ast.fields.forEach((field) => {
                value[field.name.value] = parseLiteral(field.value);
            });

            return value;
        }
        case Kind.LIST:
            return ast.values.map(parseLiteral);
        default:
            return null;
    }
}

@Resolver()
export class JsonResolvers {
    @ResolveProperty("Json")
    public json(): GraphQLScalarType {
        return new GraphQLScalarType({
            name: 'JSON',
            description:
            'The `JSON` scalar type represents JSON values as specified by ' +
            '[ECMA-404](http://www.ecma-international.org/' +
            'publications/files/ECMA-ST/ECMA-404.pdf).',
            serialize(value: any) {
                console.log(value);

                return value;
            },
            parseValue(value: any) {
                console.log(value);

                return value;
            },
            parseLiteral,
        });
    }
}
