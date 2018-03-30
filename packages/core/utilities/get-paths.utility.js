"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
function getPaths(publicPath, compiler, url) {
    const compilers = compiler && compiler.compilers;
    if (Array.isArray(compilers)) {
        let compilerPublicPath;
        let compilerPublicPathBase;
        for (let i = 0; i < compilers.length; i++) {
            compilerPublicPath = compilers[i].options
                && compilers[i].options.output
                && compilers[i].options.output.publicPath;
            if (compilerPublicPath) {
                if (compilerPublicPath.indexOf("/") === 0) {
                    compilerPublicPathBase = compilerPublicPath;
                }
                else {
                    compilerPublicPathBase = url_1.parse(compilerPublicPath).pathname;
                }
                if (url.indexOf(compilerPublicPathBase) === 0) {
                    return {
                        publicPath: compilerPublicPath,
                        outputPath: compilers[i].outputPath
                    };
                }
            }
        }
    }
    return {
        publicPath,
        outputPath: compiler.outputPath
    };
}
exports.getPaths = getPaths;
