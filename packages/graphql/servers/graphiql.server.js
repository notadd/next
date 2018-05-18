"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphiQL = require("apollo-server-module-graphiql");
const url = require("url");
function graphiqlServer(options) {
    return (request, response, next) => {
        const query = request.url && url.parse(request.url, true).query;
        GraphiQL.resolveGraphiQLString(query, options, request).then(graphiqlString => {
            response.setHeader("Content-Type", "text/html");
            response.write(graphiqlString);
            response.end();
        }, error => next(error));
    };
}
exports.graphiqlServer = graphiqlServer;

//# sourceMappingURL=graphiql.server.js.map
