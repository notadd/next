"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mime = require("mime");
const urlJoin = require("url-join");
const utilities_1 = require("../utilities");
function webpackExpress(compiler, options) {
    return (request, response, next) => {
        let filename = utilities_1.getFilenameFromUrl("/", compiler, request.url);
        if (!filename) {
            next();
        }
        else {
            if (/[0-9a-f]{10,}/.test(filename)) {
                try {
                    let stat = compiler.outputFileSystem.statSync(filename);
                    if (!stat.isFile()) {
                        if (stat.isDirectory()) {
                            let { index } = options;
                            if (index === undefined) {
                                index = 'index.html';
                            }
                            else if (!index) {
                                throw new Error("next");
                            }
                            filename = urlJoin(filename, index);
                            stat = compiler.outputFileSystem.statSync(filename);
                            if (!stat.isFile()) {
                                throw new Error("next");
                            }
                        }
                        else {
                            throw new Error("next");
                        }
                    }
                }
                catch (e) {
                    next();
                }
                let content = compiler.outputFileSystem.readFileSync(filename);
                content = utilities_1.handleRangeHeaders(content, request, response);
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
                }
                else {
                    response.end(content);
                }
            }
            else {
                next();
            }
        }
    };
}
exports.webpackExpress = webpackExpress;
