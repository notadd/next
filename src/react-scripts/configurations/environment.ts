import paths from './paths';
import { existsSync, realpathSync } from "fs";
import { delimiter, isAbsolute, resolve } from "path";

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
    throw new Error(
        'The NODE_ENV environment variable is required but was not specified.'
    );
}

const dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    NODE_ENV !== 'test' && `${paths.dotenv}.local`,
    paths.dotenv,
].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
    if (existsSync(dotenvFile.toString())) {
        require('dotenv').config({
            path: dotenvFile,
        });
    }
});

const appDirectory = realpathSync(process.cwd());

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(delimiter)
    .filter(folder => folder && !isAbsolute(folder))
    .map(folder => resolve(appDirectory, folder))
    .join(delimiter);

const REACT_APP = /^REACT_APP_/i;

export function getClientEnvironment(publicUrl) {
    const raw = Object.keys(process.env)
        .filter(key => REACT_APP.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key];
                return env;
            },
            {
                NODE_ENV: process.env.NODE_ENV || 'development',
                PUBLIC_URL: publicUrl,
            }
        );
    const stringified = {
        'process.env': Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);

            return env;
        }, {}),
    };

    return { raw, stringified };
}
