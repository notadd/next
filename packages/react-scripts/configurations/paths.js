"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var url_1 = require("url");
var appDirectory = fs_1.realpathSync(process.cwd());
var envPublicUrl = process.env.PUBLIC_URL;
var resolveApp = function (relativePath) { return path_1.resolve(appDirectory, relativePath); };
function ensureSlash(path, needsSlash) {
    var hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    }
    else if (!hasSlash && needsSlash) {
        return path + "/";
    }
    else {
        return path;
    }
}
var getPublicUrl = function (appPackageJson) { return envPublicUrl || require(appPackageJson).homepage; };
function getServedPath(appPackageJson) {
    var publicUrl = getPublicUrl(appPackageJson);
    var servedUrl = envPublicUrl || (publicUrl ? url_1.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}
var resolveOwn = function (relativePath) { return path_1.resolve(__dirname, '..', relativePath); };
var paths = {
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
    ownNodeModules: resolveOwn('node_modules'),
};
exports.default = paths;
