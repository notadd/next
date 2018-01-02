"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const develop_1 = require("./develop");
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const path = require('path');
const paths = require('./paths');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';
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
            ignored: new RegExp(`^(?!${path
                .normalize(paths.appSrc + '/')
                .replace(/[\\]+/g, '\\\\')}).+[\\\\/]node_modules[\\\\/]`, 'g'),
        },
        https: protocol === 'https',
        host: host,
        overlay: false,
        historyApiFallback: {
            disableDotRule: true,
        },
        public: allowedHost,
        proxy,
        before(app) {
            app.use(errorOverlayMiddleware());
            app.use(noopServiceWorkerMiddleware());
        },
    };
}
exports.default = server;
