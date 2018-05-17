import * as GraphiQL from "apollo-server-module-graphiql";
import { RequestHandler } from "@nestjs/common/interfaces/http/http-server.interface";
export declare function graphiqlServer(options: GraphiQL.GraphiQLData): RequestHandler;
