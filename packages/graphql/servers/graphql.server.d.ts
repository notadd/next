import { GraphQLOptions } from "apollo-server-core";
import { RequestHandler } from "@nestjs/common/interfaces/http/http-server.interface";
export declare function graphqlServer(options: GraphQLOptions): RequestHandler;
