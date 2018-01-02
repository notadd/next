'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
    const hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    } else if (!hasSlash && needsSlash) {
        return `${path}/`;
    } else {
        return path;
    }
}

const getPublicUrl = appPackageJson =>
    envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl =
        envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}

module.exports = {
    dotenv: resolveApp('.env'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveApp('src/setupTests.js'),
    appNodeModules: resolveApp('node_modules'),
    publicUrl: getPublicUrl(resolveApp('package.json')),
    servedPath: getServedPath(resolveApp('package.json')),
};

const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('.'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveApp('src/setupTests.js'),
    appNodeModules: resolveApp('node_modules'),
    publicUrl: getPublicUrl(resolveApp('package.json')),
    servedPath: getServedPath(resolveApp('package.json')),
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'), // This is empty on npm 3
};

const ownPackageJson = require('../package.json');
const reactScriptsPath = resolveApp(`node_modules/${ownPackageJson.name}`);
const reactScriptsLinked =
    fs.existsSync(reactScriptsPath) &&
    fs.lstatSync(reactScriptsPath).isSymbolicLink();

if (
    !reactScriptsLinked &&
    __dirname.indexOf(path.join('packages', 'react-scripts', 'config')) !== -1
) {
    module.exports = {
        dotenv: resolveOwn('template/.env'),
        appPath: resolveApp('.'),
        appBuild: resolveOwn('../../build'),
        appPublic: resolveOwn('template/public'),
        appHtml: resolveOwn('template/public/index.html'),
        appIndexJs: resolveOwn('template/src/index.js'),
        appPackageJson: resolveOwn('package.json'),
        appSrc: resolveOwn('template/src'),
        yarnLockFile: resolveOwn('template/yarn.lock'),
        testsSetup: resolveOwn('template/src/setupTests.js'),
        appNodeModules: resolveOwn('node_modules'),
        publicUrl: getPublicUrl(resolveOwn('package.json')),
        servedPath: getServedPath(resolveOwn('package.json')),
        ownPath: resolveOwn('.'),
        ownNodeModules: resolveOwn('node_modules'),
    };
}
