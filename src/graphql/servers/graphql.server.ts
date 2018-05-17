import {
    GraphQLOptions,
    HttpQueryError,
    runHttpQuery,
} from "apollo-server-core";
import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "@nestjs/common/interfaces/http/http-server.interface";

export function graphqlServer(options: GraphQLOptions): RequestHandler {
    return (req: Partial<IncomingMessage> | any, res: ServerResponse | any, next: any) => {
        runHttpQuery([req, res], {
            method: req.method,
            options,
            query: req.method === "POST" ? req.body : req.query,
        }).then(
            gqlResponse => {
                res.setHeader("Content-Type", "application/json");
                res.setHeader(
                    "Content-Length",
                    Buffer.byteLength(gqlResponse, "utf8").toString(),
                );
                res.write(gqlResponse);
                res.end();
            },
            (error: HttpQueryError) => {
                if ("HttpQueryError" !== error.name) {
                    return next(error);
                }

                if (error.headers) {
                    Object.keys(error.headers).forEach(header => {
                        res.setHeader(header, error.headers[header]);
                    });
                }

                res.statusCode = error.statusCode;
                res.write(error.message);
                res.end();
            },
        );
    };
}
