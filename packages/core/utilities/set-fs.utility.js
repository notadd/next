"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryFileSystem = require("memory-fs");
const pathabs = require("path-is-absolute");
class DevMiddlewareError extends Error {
}
function setFs(context, compiler) {
    if (typeof compiler.outputPath === "string" && !pathabs.posix(compiler.outputPath) && !pathabs.win32(compiler.outputPath)) {
        throw new DevMiddlewareError("`output.path` needs to be an absolute path or `/`.");
    }
    let fs;
    const isMemoryFs = !compiler.compilers && compiler.outputFileSystem instanceof MemoryFileSystem;
    if (isMemoryFs) {
        fs = compiler.outputFileSystem;
    }
    else {
        fs = new MemoryFileSystem();
        compiler.outputFileSystem = fs;
    }
    context.fs = fs;
}
exports.setFs = setFs;
