"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paths_1 = require("./paths");
var fs_1 = require("fs");
var path_1 = require("path");
var NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
    throw new Error('The NODE_ENV environment variable is required but was not specified.');
}
var dotenvFiles = [
    paths_1.default.dotenv + "." + NODE_ENV + ".local",
    paths_1.default.dotenv + "." + NODE_ENV,
    NODE_ENV !== 'test' && paths_1.default.dotenv + ".local",
    paths_1.default.dotenv,
].filter(Boolean);
dotenvFiles.forEach(function (dotenvFile) {
    if (fs_1.existsSync(dotenvFile.toString())) {
        require('dotenv').config({
            path: dotenvFile,
        });
    }
});
var appDirectory = fs_1.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path_1.delimiter)
    .filter(function (folder) { return folder && !path_1.isAbsolute(folder); })
    .map(function (folder) { return path_1.resolve(appDirectory, folder); })
    .join(path_1.delimiter);
var REACT_APP = /^REACT_APP_/i;
function getClientEnvironment(publicUrl) {
    var raw = Object.keys(process.env)
        .filter(function (key) { return REACT_APP.test(key); })
        .reduce(function (env, key) {
        env[key] = process.env[key];
        return env;
    }, {
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: publicUrl,
    });
    var stringified = {
        'process.env': Object.keys(raw).reduce(function (env, key) {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };
    return { raw: raw, stringified: stringified };
}
exports.getClientEnvironment = getClientEnvironment;
