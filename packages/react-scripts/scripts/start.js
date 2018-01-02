"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.on('unhandledRejection', function (err) {
    throw err;
});
require("./configurations/environment");
var fs_1 = require("fs");
var WebpackDevServer = require("webpack-dev-server");
var paths_1 = require("../configurations/paths");
var develop_1 = require("../configurations/develop");
var webpack = require("webpack");
var server_1 = require("../configurations/server");
var clearConsole = require('react-dev-utils/clearConsole');
var checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
var _a = require('react-dev-utils/WebpackDevServerUtils'), choosePort = _a.choosePort, createCompiler = _a.createCompiler, prepareProxy = _a.prepareProxy, prepareUrls = _a.prepareUrls;
var openBrowser = require('react-dev-utils/openBrowser');
var useYarn = fs_1.existsSync(paths_1.default.yarnLockFile);
var isInteractive = process.stdout.isTTY;
if (!checkRequiredFiles([paths_1.default.appHtml, paths_1.default.appIndexJs])) {
    process.exit(1);
}
var DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
var HOST = process.env.HOST || '0.0.0.0';
choosePort(HOST, DEFAULT_PORT)
    .then(function (port) {
    if (port == null) {
        return;
    }
    var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    var appName = require(paths_1.default.appPackageJson).name;
    var urls = prepareUrls(protocol, HOST, port);
    var compiler = createCompiler(webpack, develop_1.default, appName, urls, useYarn);
    var proxySetting = require(paths_1.default.appPackageJson).proxy;
    var proxyConfig = prepareProxy(proxySetting, paths_1.default.appPublic);
    var serverConfig = server_1.default(proxyConfig, urls.lanUrlForConfig);
    var devServer = new WebpackDevServer(compiler, serverConfig);
    devServer.listen(port, HOST, function (err) {
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
    .catch(function (err) {
    if (err && err.message) {
        console.log(err.message);
    }
    process.exit(1);
});
