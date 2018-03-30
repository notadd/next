import * as HTMLWebpackPlugin from "html-webpack-plugin";
import * as mime from "mime";
import * as urlJoin from "url-join";
import * as webpack from "webpack";
import { DefinePlugin, HotModuleReplacementPlugin, NamedModulesPlugin } from "webpack";
import { getFilenameFromUrl, handleRangeHeaders } from "../utilities";
import { join } from "path";
import { Request, Response } from "express";
import { WebpackConfiguration } from "../interfaces/webpack-configuration.interface";

export function webpackExpress(options: WebpackConfiguration) {
    const compiler: webpack.Compiler = webpack({
        resolve: {
            extensions: [".js", ".json", ".js", ".jsx"]
        },
        entry: {
            main: [
                join(process.cwd(), "node_modules", "@notadd", "backend-mix", "index.js")
            ]
        },
        output: {
            pathinfo: true,
            filename: "js/[name].js",
            chunkFilename: "js/[name].chunk.js"
        },
        module: {
            rules: [
            ]
        },
        plugins: [
            new NamedModulesPlugin(),
            new HotModuleReplacementPlugin(),
            new DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }),
            new HTMLWebpackPlugin({
                template: join(process.cwd(), "public", "index.html"),
                inject: "body",
                chunksSortMode: "dependency",
                xhtml: true
            }),
        ]
    });
    compiler.plugin("done", () => {
    });
    compiler.plugin("invalid", () => {
    });
    compiler.plugin("watch-run", () => {
    });
    compiler.plugin("run", () => {
    });
    compiler.watch({}, error => {
        if (error) {
            console.log(error);
        }
    });
    compiler.run(error => {
        if (error) {
            console.log(error);
        }
    });

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
                        index = "index.html";
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
                contentType += "; charset=UTF-8";
            }

            response.setHeader("Content-Type", contentType);
            response.setHeader("Content-Length", content.length);

            const { headers } = options;
            if (headers) {
                for (const name in headers) {
                    if ({}.hasOwnProperty.call(headers, name)) {
                        if (options && options.headers && options.headers[name]) {
                            response.setHeader(name, options.headers[name]);
                        }
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
