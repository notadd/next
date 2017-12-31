"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = require("./paths");
const fs_1 = require("fs");
const path_1 = require("path");
const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
    throw new Error('The NODE_ENV environment variable is required but was not specified.');
}
const dotenvFiles = [
    `${paths_1.default.dotenv}.${NODE_ENV}.local`,
    `${paths_1.default.dotenv}.${NODE_ENV}`,
    NODE_ENV !== 'test' && `${paths_1.default.dotenv}.local`,
    paths_1.default.dotenv,
].filter(Boolean);
dotenvFiles.forEach(dotenvFile => {
    if (fs_1.existsSync(dotenvFile.toString())) {
        require('dotenv').config({
            path: dotenvFile,
        });
    }
});
const appDirectory = fs_1.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path_1.delimiter)
    .filter(folder => folder && !path_1.isAbsolute(folder))
    .map(folder => path_1.resolve(appDirectory, folder))
    .join(path_1.delimiter);
const REACT_APP = /^REACT_APP_/i;
function getClientEnvironment(publicUrl) {
    const raw = Object.keys(process.env)
        .filter(key => REACT_APP.test(key))
        .reduce((env, key) => {
        env[key] = process.env[key];
        return env;
    }, {
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: publicUrl,
    });
    const stringified = {
        'process.env': Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };
    return { raw, stringified };
}
exports.getClientEnvironment = getClientEnvironment;
