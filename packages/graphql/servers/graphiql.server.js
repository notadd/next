"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphiQL = require("apollo-server-module-graphiql");
const url = require("url");
function graphiqlServer(options) {
    return (req, res, next) => {
        const query = req.url && url.parse(req.url, true).query;
        GraphiQL.resolveGraphiQLString(query, options, req).then(graphiqlString => {
            res.setHeader("Content-Type", "text/html");
            res.write(graphiqlString);
            res.end();
        }, error => next(error));
    };
}
exports.graphiqlServer = graphiqlServer;

//# sourceMappingURL=graphiql.server.js.map
