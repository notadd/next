import * as GraphiQL from "apollo-server-module-graphiql";
import * as url from "url";
import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "@nestjs/common/interfaces/http/http-server.interface";

export function graphiqlServer(options: GraphiQL.GraphiQLData): RequestHandler {
    return (req: Partial<IncomingMessage>, res: ServerResponse | any, next: any) => {
        const query = req.url && url.parse(req.url, true).query;
        GraphiQL.resolveGraphiQLString(query, options, req).then(
            graphiqlString => {
                res.setHeader("Content-Type", "text/html");
                res.write(graphiqlString);
                res.end();
            },
            error => next(error),
        );
    };
}
