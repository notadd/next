"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paths_1 = require("./paths");
var path_1 = require("path");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackManifestPlugin = require("webpack-manifest-plugin");
var environment_1 = require("./environment");
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var eslintFormatter = require('react-dev-utils/eslintFormatter');
var ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
var publicPath = paths_1.default.servedPath;
var shouldUseRelativeAssetPaths = publicPath === './';
var shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
var publicUrl = publicPath.slice(0, -1);
var env = environment_1.getClientEnvironment(publicUrl);
if (env.stringified['process.env']['NODE_ENV'] !== '"production"') {
    throw new Error('Production builds must have NODE_ENV=production.');
}
var cssFilename = 'static/css/[name].[contenthash:8].css';
var extractTextPluginOptions = shouldUseRelativeAssetPaths
    ?
        { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};
exports.default = {
    bail: true,
    devtool: shouldUseSourceMap ? 'source-map' : false,
    entry: [require.resolve('./polyfills'), paths_1.default.appIndexJs],
    output: {
        path: paths_1.default.appBuild,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: function (info) {
            return path_1.relative(paths_1.default.appSrc, info.absoluteResourcePath)
                .replace(/\\/g, '/');
        },
    },
    resolve: {
        modules: ['node_modules', paths_1.default.appNodeModules].concat(process.env.NODE_PATH.split(path_1.delimiter).filter(Boolean)),
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            'babel-runtime': path_1.dirname(require.resolve('babel-runtime/package.json')),
            'react-native': 'react-native-web',
        },
        plugins: [
            new ModuleScopePlugin(paths_1.default.appSrc, [paths_1.default.appPackageJson]),
        ],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                            baseConfig: {
                                extends: [require.resolve('eslint-config-react-app')],
                            },
                            ignore: false,
                            useEslintrc: false,
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths_1.default.appSrc,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: paths_1.default.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            presets: [require.resolve('babel-preset-react-app')],
                            compact: true,
                        },
                    },
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract(Object.assign({
                            fallback: {
                                loader: require.resolve('style-loader'),
                                options: {
                                    hmr: false,
                                },
                            },
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 1,
                                        minimize: true,
                                        sourceMap: shouldUseSourceMap,
                                    },
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        ident: 'postcss',
                                        plugins: function () { return [
                                            require('postcss-flexbugs-fixes'),
                                            autoprefixer({
                                                browsers: [
                                                    '>1%',
                                                    'last 4 versions',
                                                    'Firefox ESR',
                                                    'not ie < 9',
                                                ],
                                                flexbox: 'no-2009',
                                            }),
                                        ]; },
                                    },
                                },
                            ],
                        }, extractTextPluginOptions)),
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new InterpolateHtmlPlugin(env.raw),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths_1.default.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new webpack.DefinePlugin(env.stringified),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                comparisons: false,
            },
            mangle: {
                safari10: true,
            },
            sourceMap: shouldUseSourceMap,
        }),
        new ExtractTextPlugin({
            filename: cssFilename,
        }),
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger: function (message) {
                if (message.indexOf('Total precache size is') === 0) {
                    return;
                }
                if (message.indexOf('Skipping static resource') === 0) {
                    return;
                }
                console.log(message);
            },
            minify: true,
            navigateFallback: publicUrl + '/index.html',
            navigateFallbackWhitelist: [/^(?!\/__).*/],
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
};
