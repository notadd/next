"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var develop_1 = require("./develop");
var errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
var noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
var path = require('path');
var paths = require('./paths');
var protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
var host = process.env.HOST || '0.0.0.0';
function server(proxy, allowedHost) {
    return {
        disableHostCheck: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
        compress: true,
        clientLogLevel: 'none',
        contentBase: paths.appPublic,
        watchContentBase: true,
        hot: true,
        publicPath: develop_1.default.output.publicPath,
        quiet: true,
        watchOptions: {
            ignored: new RegExp("^(?!" + path
                .normalize(paths.appSrc + '/')
                .replace(/[\\]+/g, '\\\\') + ").+[\\\\/]node_modules[\\\\/]", 'g'),
        },
        https: protocol === 'https',
        host: host,
        overlay: false,
        historyApiFallback: {
            disableDotRule: true,
        },
        public: allowedHost,
        proxy: proxy,
        before: function (app) {
            app.use(errorOverlayMiddleware());
            app.use(noopServiceWorkerMiddleware());
        },
    };
}
exports.default = server;
