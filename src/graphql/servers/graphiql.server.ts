import * as GraphiQL from "apollo-server-module-graphiql";
import * as url from "url";
import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "@nestjs/common/interfaces/http/http-server.interface";

export function graphiqlServer(options: GraphiQL.GraphiQLData): RequestHandler {
    return (request: Partial<IncomingMessage> | any, response: ServerResponse | any, next: any) => {
        const query = request.url && url.parse(request.url, true).query;
        GraphiQL.resolveGraphiQLString(query, options, request).then(
            graphiqlString => {
                response.setHeader("Content-Type", "text/html");
                response.write(graphiqlString);
                response.end();
            },
            error => next(error),
        );
    };
}
