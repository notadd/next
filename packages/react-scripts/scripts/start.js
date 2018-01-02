"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.on('unhandledRejection', err => {
    throw err;
});
require("./configurations/environment");
const fs_1 = require("fs");
const WebpackDevServer = require("webpack-dev-server");
const paths_1 = require("../configurations/paths");
const develop_1 = require("../configurations/develop");
const webpack = require("webpack");
const server_1 = require("../configurations/server");
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const { choosePort, createCompiler, prepareProxy, prepareUrls, } = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const useYarn = fs_1.existsSync(paths_1.default.yarnLockFile);
const isInteractive = process.stdout.isTTY;
if (!checkRequiredFiles([paths_1.default.appHtml, paths_1.default.appIndexJs])) {
    process.exit(1);
}
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
choosePort(HOST, DEFAULT_PORT)
    .then(port => {
    if (port == null) {
        return;
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const appName = require(paths_1.default.appPackageJson).name;
    const urls = prepareUrls(protocol, HOST, port);
    const compiler = createCompiler(webpack, develop_1.default, appName, urls, useYarn);
    const proxySetting = require(paths_1.default.appPackageJson).proxy;
    const proxyConfig = prepareProxy(proxySetting, paths_1.default.appPublic);
    const serverConfig = server_1.default(proxyConfig, urls.lanUrlForConfig);
    const devServer = new WebpackDevServer(compiler, serverConfig);
    devServer.listen(port, HOST, err => {
        if (err) {
            return console.log(err);
        }
        if (isInteractive) {
            clearConsole();
        }
        console.log(chalk_1.default.cyan('Starting the development server...\n'));
        openBrowser(urls.localUrlForBrowser);
    });
    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
        process.on(sig, function () {
            devServer.close();
            process.exit();
        });
    });
})
    .catch(err => {
    if (err && err.message) {
        console.log(err.message);
    }
    process.exit(1);
});
