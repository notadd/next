"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_plugins_1 = require("@already/webpack-plugins");
const path_1 = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const entry = path_1.join(process.cwd(), "src", "server", "bootstrap.ts");
const output = path_1.join(process.cwd(), "storages", "caches");
const configuration = {
    entry: [
        "webpack/hot/poll?1000",
        entry,
    ],
    watch: true,
    target: "node",
    externals: [
        nodeExternals({
            whitelist: [
                "webpack/hot/poll?1000",
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js",
        ],
    },
    plugins: [
        new webpack_plugins_1.BackendPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: output,
        filename: "server.js",
    },
};
webpack.run(configuration);

//# sourceMappingURL=bootstrap.with.webpack.js.map
