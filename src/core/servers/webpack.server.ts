import * as mime from "mime";
import * as urlJoin from "url-join";
import * as webpack from "webpack";
import { getFilenameFromUrl, handleRangeHeaders } from "../utilities";
import { Request, Response } from "express";
import { WebpackConfiguration } from "../interfaces/webpack-configuration.interface";

export function webpackExpress(compiler: webpack.Compiler, options: WebpackConfiguration) {
    return (request: Request, response: Response, next: any) => {
        let filename: string = getFilenameFromUrl("/", compiler, request.url);
        if (!filename) {
            next();
        } else {
            console.log(filename);
            let stat = compiler.outputFileSystem.statSync(filename);
            if (!stat.isFile()) {
                if (stat.isDirectory()) {
                    let { index } = options;
                    if (index === undefined) {
                        index = 'index.html';
                    } else if (!index) {
                        throw new Error("next");
                    }
                    filename = urlJoin(filename, index);
                    stat = compiler.outputFileSystem.statSync(filename);
                    if (!stat.isFile()) {
                        throw new Error("next");
                    }
                } else {
                    throw new Error("next");
                }
            }
            let content = compiler.outputFileSystem.readFileSync(filename);
            content = handleRangeHeaders(content, request, response);
            let contentType = mime.getType(filename);
            if (contentType === null) {
                contentType = "";
            }
            if (!/\.wasm$/.test(filename)) {
                contentType += '; charset=UTF-8';
            }

            response.setHeader('Content-Type', contentType);
            response.setHeader('Content-Length', content.length);

            const { headers } = options;
            if (headers) {
                for (const name in headers) {
                    if ({}.hasOwnProperty.call(headers, name)) {
                        response.setHeader(name, options.headers[name]);
                    }
                }
            }
            response.statusCode = response.statusCode || 200;
            if (response.send) {
                response.send(content);
            } else {
                response.end(content);
            }
        }
    };
}
